"use client";

import React from "react";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"; // Removed Card and CardHeader
import { Truck, Package, Warehouse, Route } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-blue-600 mb-4" />,
      title: "Freight Transportation",
      description: "Reliable and efficient transportation of goods across various distances.",
    },
    {
      icon: <Package className="h-10 w-10 text-blue-600 mb-4" />,
      title: "Cargo Handling",
      description: "Expert handling and secure management of all types of cargo.",
    },
    {
      icon: <Warehouse className="h-10 w-10 text-blue-600 mb-4" />,
      title: "Warehousing Solutions",
      description: "Flexible and secure storage options for your inventory.",
    },
    {
      icon: <Route className="h-10 w-10 text-blue-600 mb-4" />,
      title: "Route Optimization",
      description: "Advanced planning to ensure the most efficient delivery routes.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Our Comprehensive Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We offer a wide range of logistics solutions designed to meet your specific needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center p-6 text-center shadow-lg rounded-lg bg-card text-card-foreground"> {/* Replaced Card with div */}
                {service.icon}
                <CardTitle className="mb-2 text-primary">{service.title}</CardTitle>
                <CardContent className="p-0"> {/* Adjusted padding for CardContent */}
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;