"use client";

import React from "react";
import { Truck, Package, Route } from "lucide-react"; // Removed Warehouse as it's no longer used

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-white mb-4" />, // Changed icon color to white
      title: "Freight Transportation",
      description: "Reliable and efficient transportation of goods across various distances.",
    },
    {
      icon: <Package className="h-10 w-10 text-white mb-4" />, // Changed icon color to white
      title: "Cargo Handling",
      description: "Expert handling and secure management of all types of cargo.",
    },
    {
      icon: <Route className="h-10 w-10 text-white mb-4" />, // Changed icon color to white
      title: "Route Optimization",
      description: "Advanced planning to ensure the most efficient delivery routes.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white"> {/* Changed background to blue and text to white */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"> {/* Changed text color to white */}
              Our Comprehensive Services
            </h2>
            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto"> {/* Changed text color to a lighter blue */}
              We offer a wide range of logistics solutions designed to meet your specific needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* Changed grid-cols-4 to grid-cols-3 since one service was removed */}
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center p-6 text-center">
                {service.icon}
                <h3 className="mb-2 text-white text-lg font-semibold">{service.title}</h3> {/* Changed text color to white */}
                <p className="text-blue-100">{service.description}</p> {/* Changed text color to a lighter blue */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;