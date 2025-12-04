"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Briefcase, Globe } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-6">
            About ACE TRUCKERS CORP
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            ACE TRUCKERS CORP is a dynamic and rapidly expanding logistics company based in the Philippines.
            We are dedicated to providing top-tier transport solutions, ensuring efficiency, reliability, and security for all our clients.
          </p>
        </section>

        <Separator className="my-12" />

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To be the leading logistics partner in the Philippines, recognized for our unwavering commitment to service excellence, innovation, and customer satisfaction.
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-col items-center text-center">
              <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To revolutionize the transport industry by continuously improving our services, expanding our reach, and fostering strong, lasting relationships with our clients and partners.
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-primary">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Integrity, Efficiency, Safety, Customer Focus, and Teamwork are the core principles that guide every aspect of our operations.
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-4">
            Our History
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-md">
            Founded with a vision to streamline logistics in the Philippines, ACE TRUCKERS CORP has grown from a small operation into a trusted name in the industry. Over the years, we have expanded our fleet, embraced cutting-edge technology, and built a team of dedicated professionals, all while maintaining our commitment to delivering exceptional service. We are proud to serve over 60 esteemed clients and continue to grow our network.
          </p>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-600 text-white text-center">
        <p className="text-sm">&copy; 2024 ACE TRUCKERS CORP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;