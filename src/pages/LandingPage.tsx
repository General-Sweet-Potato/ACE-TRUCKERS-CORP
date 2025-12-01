"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Rocket, Zap, Shield, CheckCircle2 } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Launch Your Ideas with Dyad
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90">
              The ultimate platform for building and deploying web applications with ease and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Your Success
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Dyad provides a comprehensive suite of tools to help you build, deploy, and scale your applications.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 text-center">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="mb-2">Rapid Development</CardTitle>
                <CardDescription>
                  Build and iterate quickly with our intuitive tools and real-time preview.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="mb-2">Blazing Fast Deployment</CardTitle>
                <CardDescription>
                  Deploy your applications instantly with optimized performance.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="mb-2">Secure & Scalable</CardTitle>
                <CardDescription>
                  Ensure your applications are secure and can scale to meet demand.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of developers building amazing things with Dyad. Sign up for our newsletter to stay updated!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input type="email" placeholder="Enter your email" className="max-w-sm flex-1" />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground text-center">
        <p className="text-sm">&copy; 2024 Dyad. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;