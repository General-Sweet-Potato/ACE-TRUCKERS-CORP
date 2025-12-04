"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useSession } from "@/components/SessionContextProvider";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { showError } from "@/utils/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle, Trash2, Edit } from "lucide-react";

interface NavigationItem {
  id: string;
  name: string;
  path: string;
  order_index: number;
  is_public: boolean;
  required_role: string;
}

const AdminDashboardPage = () => {
  const { user, loading: sessionLoading } = useSession();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
  const [loadingNav, setLoadingNav] = useState(true);
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [newItem, setNewItem] = useState<Omit<NavigationItem, 'id' | 'created_at'>>({
    name: '',
    path: '',
    order_index: 0,
    is_public: true,
    required_role: 'user',
  });

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching user role:", error.message);
          showError("Failed to fetch user role.");
          setUserRole(null);
        } else {
          setUserRole(data?.role || null);
        }
      } else {
        setUserRole(null);
      }
    };

    fetchUserRole();
  }, [user]);

  useEffect(() => {
    if (!sessionLoading && !user) {
      navigate('/login');
    } else if (!sessionLoading && user && userRole !== 'admin' && userRole !== null) {
      navigate('/'); // Redirect non-admins
    }
  }, [sessionLoading, user, userRole, navigate]);

  const fetchNavigationItems = async () => {
    setLoadingNav(true);
    const { data, error } = await supabase
      .from("navigation_items")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      console.error("Error fetching navigation items:", error.message);
      showError("Failed to load navigation items.");
    } else {
      setNavigationItems(data || []);
    }
    setLoadingNav(false);
  };

  useEffect(() => {
    if (userRole === 'admin') {
      fetchNavigationItems();
    }
  }, [userRole]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (editingItem) {
      setEditingItem({
        ...editingItem,
        [name]: type === 'checkbox' ? checked : value,
      });
    } else {
      setNewItem({
        ...newItem,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleAddOrUpdateItem = async () => {
    if (editingItem) {
      const { id, created_at, ...updateData } = editingItem;
      const { error } = await supabase
        .from("navigation_items")
        .update(updateData)
        .eq("id", id);

      if (error) {
        showError("Failed to update navigation item: " + error.message);
      } else {
        showSuccess("Navigation item updated successfully!");
        setEditingItem(null);
        fetchNavigationItems();
      }
    } else {
      const { error } = await supabase
        .from("navigation_items")
        .insert([newItem]);

      if (error) {
        showError("Failed to add navigation item: " + error.message);
      } else {
        showSuccess("Navigation item added successfully!");
        setNewItem({ name: '', path: '', order_index: 0, is_public: true, required_role: 'user' });
        fetchNavigationItems();
      }
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this navigation item?")) {
      const { error } = await supabase
        .from("navigation_items")
        .delete()
        .eq("id", id);

      if (error) {
        showError("Failed to delete navigation item: " + error.message);
      } else {
        showSuccess("Navigation item deleted successfully!");
        fetchNavigationItems();
      }
    }
  };

  if (sessionLoading || (user && userRole === null)) {
    return <div className="min-h-screen flex items-center justify-center">Loading authentication...</div>;
  }

  if (!user || userRole !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-xl text-red-500">Access Denied: You must be an administrator to view this page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-12 text-center">
          Admin Dashboard
        </h1>

        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>{editingItem ? "Edit Navigation Item" : "Add New Navigation Item"}</CardTitle>
              <CardDescription>Manage your application's navigation links.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={editingItem ? editingItem.name : newItem.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="path" className="text-right">Path</Label>
                  <Input
                    id="path"
                    name="path"
                    value={editingItem ? editingItem.path : newItem.path}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="order_index" className="text-right">Order</Label>
                  <Input
                    id="order_index"
                    name="order_index"
                    type="number"
                    value={editingItem ? editingItem.order_index : newItem.order_index}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="is_public" className="text-right">Public</Label>
                  <Switch
                    id="is_public"
                    name="is_public"
                    checked={editingItem ? editingItem.is_public : newItem.is_public}
                    onCheckedChange={(checked) => handleInputChange({ target: { name: 'is_public', type: 'checkbox', checked } } as React.ChangeEvent<HTMLInputElement>)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="required_role" className="text-right">Required Role</Label>
                  <Input
                    id="required_role"
                    name="required_role"
                    value={editingItem ? editingItem.required_role : newItem.required_role}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <Button onClick={handleAddOrUpdateItem} className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  {editingItem ? (
                    <>
                      <Edit className="mr-2 h-4 w-4" /> Update Item
                    </>
                  ) : (
                    <>
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Item
                    </>
                  )}
                </Button>
                {editingItem && (
                  <Button variant="outline" onClick={() => setEditingItem(null)} className="w-full mt-2">
                    Cancel Edit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Existing Navigation Items</h2>
          {loadingNav ? (
            <p className="text-center text-muted-foreground">Loading navigation items...</p>
          ) : navigationItems.length === 0 ? (
            <p className="text-center text-muted-foreground">No navigation items found. Add one above!</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {navigationItems.map((item) => (
                <Card key={item.id} className="shadow-sm">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.path}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Order: {item.order_index}</p>
                      <p className="text-sm text-muted-foreground">Public: {item.is_public ? "Yes" : "No"}</p>
                      <p className="text-sm text-muted-foreground">Role: {item.required_role}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => setEditingItem(item)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-600 text-white text-center">
        <p className="text-sm">&copy; 2024 ACE TRUCKERS CORP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboardPage;