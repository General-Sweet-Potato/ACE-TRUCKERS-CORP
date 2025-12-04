"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection"; // Import the new ServicesSection component
import placeholderSvg from "/public/placeholder.svg"; // Import the SVG directly

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              ACE TRUCKERS CORP
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90">
              A fast-growing logistics company offering transport solutions to over 60 known clients locally in the Philippines, aiming to be one of the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get a Quote
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-500/20 border border-white text-white hover:bg-blue-500/40"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Test Image for Debugging */}
      <div className="p-8 bg-yellow-200 border-8 border-purple-700 text-center">
        <h3 className="text-2xl font-bold mb-4">DEBUG: Image Test Below</h3>
        <img src={placeholderSvg} alt="Test Placeholder" className="mx-auto h-64 w-64 object-contain border-4 border-green-500 bg-gray-300" />
        <p className="mt-4 text-lg">If you see a gray square with a green border, the image is rendering!</p>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Why Choose ACE TRUCKERS CORP?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                We are committed to providing reliable, efficient, and secure logistics services.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 text-center shadow-lg bg-white">
                <img src={placeholderSvg} alt="Fast & Reliable Delivery" className="h-48 w-48 object-cover rounded-full mb-4 border-4 border-red-500" />
                <CardTitle className="mb-2 text-primary">Fast & Reliable Delivery</CardTitle>
                <CardDescription>
                  Ensuring your goods reach their destination on time, every time.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-lg bg-white">
                <img src={placeholderSvg} alt="Efficient Operations" className="h-48 w-48 object-cover rounded-full mb-4 border-4 border-red-500" />
                <CardTitle className="mb-2 text-primary">Efficient Operations</CardTitle>
                <CardDescription>
                  Streamlined processes for maximum efficiency and cost-effectiveness.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-lg bg-white">
                <img src={placeholderSvg} alt="Secure Transport" className="h-48 w-48 object-cover rounded-full mb-4 border-4 border-red-500" />
                <CardTitle className="mb-2 text-primary">Secure Transport</CardTitle>
                <CardDescription>
                  Your cargo is safe with us, handled with utmost care and security.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-lg bg-white">
                <img src={placeholderSvg} alt="Trusted by Clients" className="h-48 w-48 object-cover rounded-full mb-4 border-4 border-red-500" />
                <CardTitle className="mb-2 text-primary">Trusted by Clients</CardTitle>
                <CardDescription>
                  Proudly serving over 60 known clients across the Philippines.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection /> {/* Render the new ServicesSection component */}

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Partner with the Best in Logistics
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience seamless transport solutions tailored to your needs. Get a free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input type="email" placeholder="Enter your email for a quote" className="max-w-sm flex-1" />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-600 text-white text-center">
        <p className="text-sm">&copy; 2024 ACE TRUCKERS CORP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;