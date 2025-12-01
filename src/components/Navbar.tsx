"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import atcSquareLogo from "/public/atc-square-logo.png"; // Import the logo image directly

const Navbar = () => {
  const isMobile = useIsMobile();

  const navLinks = (
    <>
      <Link to="/" className="text-lg font-medium hover:text-blue-200 transition-colors">
        Home
      </Link>
      <Link to="/about-us" className="text-lg font-medium hover:text-blue-200 transition-colors">
        About Us
      </Link>
      <Link to="/career" className="text-lg font-medium hover:text-blue-200 transition-colors">
        Career
      </Link>
      <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
        <Link to="/get-quote">Get a Quote</Link>
      </Button>
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
                {navLinks}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;