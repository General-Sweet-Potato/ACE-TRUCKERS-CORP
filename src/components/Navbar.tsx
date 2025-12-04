"use client";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, LogIn, Settings } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import atcSquareLogo from "/public/atc-square-logo.png";
import ContactUsDialog from "@/components/ContactUsDialog";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/components/SessionContextProvider";
import { showError, showSuccess } from "@/utils/toast";

interface NavigationItem {
  id: string;
  name: string;
  path: string;
  order_index: number;
  is_public: boolean;
  required_role: string;
}

const Navbar = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { session, user, loading } = useSession();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigationItems = async () => {
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
    };

    fetchNavigationItems();
  }, []);

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

  const handleOpenContactDialog = () => setIsContactDialogOpen(true);
  const handleCloseContactDialog = () => setIsContactDialogOpen(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      showError("Failed to log out: " + error.message);
    } else {
      showSuccess("You have been logged out.");
      navigate('/login');
    }
  };

  const filteredNavLinks = navigationItems.filter(item => {
    if (item.is_public) return true;
    if (session && userRole) {
      return userRole === 'admin' || userRole === item.required_role;
    }
    return false;
  });

  const renderNavLinks = (
    <>
      {filteredNavLinks.map((item) => (
        <Link key={item.id} to={item.path} className="text-lg font-medium hover:text-blue-200 transition-colors">
          {item.name}
        </Link>
      ))}
      {userRole === 'admin' && (
        <Link to="/admin/dashboard" className="text-lg font-medium hover:text-blue-200 transition-colors flex items-center gap-1">
          <Settings className="h-5 w-5" /> Admin
        </Link>
      )}
      <Button onClick={handleOpenContactDialog} className="bg-white text-blue-600 hover:bg-gray-100">
        Contact Us
      </Button>
      {session ? (
        <Button onClick={handleLogout} className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-1">
          <LogOut className="h-5 w-5" /> Logout
        </Button>
      ) : (
        <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-1">
          <Link to="/login">
            <LogIn className="h-5 w-5" /> Login
          </Link>
        </Button>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={atcSquareLogo} alt="ACE TRUCKERS CORP Logo" className="block h-10 w-auto object-contain" />
          <span className="sr-only">ACE TRUCKERS CORP</span>
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col bg-blue-700 text-white">
              <Link to="/" className="flex items-center gap-2 p-4">
                <img src={atcSquareLogo} alt="ACE TRUCKERS CORP Logo" className="block h-10 w-auto object-contain" />
                <span className="text-xl font-bold">ACE TRUCKERS CORP</span>
              </Link>
              <nav className="grid gap-4 p-4">
                {renderNavLinks}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            {renderNavLinks}
          </nav>
        )}
      </div>
      <ContactUsDialog isOpen={isContactDialogOpen} onClose={handleCloseContactDialog} />
    </header>
  );
};

export default Navbar;