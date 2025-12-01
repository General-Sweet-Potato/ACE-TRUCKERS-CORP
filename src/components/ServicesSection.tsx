"use client";

import React from "react";
import { Truck, Package, Route } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck size={40} color="white" className="mb-4" />, // Using size and color props
      title: "Freight Transportation",
      description: "Reliable and efficient transportation of goods across various distances.",
    },
    {
      icon: <Package size={40} color="white" className="mb-4" />, // Using size and color props
      title: "Cargo Handling",
      description: "Expert handling and secure management of all types of cargo.",
    },
    {
      icon: <Route size={40} color="white" className="mb-4" />, // Using size and color props
      title: "Route Optimization",
      description: "Advanced planning to ensure the most efficient delivery routes.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Comprehensive Services
            </h2>
            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We offer a wide range of logistics solutions designed to meet your specific needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center p-6 text-center">
                {service.icon}
                <h3 className="mb-2 text-white text-lg font-semibold">{service.title}</h3>
                <p className="text-blue-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;