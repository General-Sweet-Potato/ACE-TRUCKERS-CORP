"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const CareerPage = () => {
  const jobOpenings = [
    {
      title: "Truck Driver (Heavy Vehicle)",
      location: "Manila, Philippines",
      description: "Experienced heavy vehicle drivers needed for long-haul and local deliveries. Must have valid professional driver's license.",
    },
    {
      title: "Logistics Coordinator",
      location: "Makati, Philippines",
      description: "Organize and monitor shipments, manage schedules, and communicate with clients. Strong organizational skills required.",
    },
    {
      title: "Warehouse Staff",
      location: "Cavite, Philippines",
      description: "Responsible for receiving, storing, and dispatching goods. Experience in warehouse operations preferred.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-6">
            Join Our Team at ACE TRUCKERS CORP
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            At ACE TRUCKERS CORP, we believe our people are our greatest asset. We are always looking for talented and dedicated individuals to join our growing family and contribute to our mission of delivering excellence in logistics.
          </p>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-primary mb-8">
            Current Job Openings
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">{job.title}</CardTitle>
                  <CardContent className="text-muted-foreground p-0 pt-2">
                    <p className="text-sm font-medium">{job.location}</p>
                    <p className="text-sm mt-2">{job.description}</p>
                  </CardContent>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="mt-4 w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-8">
            Why Work With Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6">
              <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                We invest in our employees' development and offer clear paths for career advancement.
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Supportive Culture</h3>
              <p className="text-muted-foreground">
                Join a team that values collaboration, respect, and mutual support.
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Be part of a company that embraces new technologies and ideas to stay ahead.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-md mb-8">
            If you're passionate about logistics and looking for a challenging yet rewarding career, we encourage you to explore our opportunities.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/contact-us">Contact Our HR Team</Link>
          </Button>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-600 text-white text-center">
        <p className="text-sm">&copy; 2024 ACE TRUCKERS CORP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerPage;