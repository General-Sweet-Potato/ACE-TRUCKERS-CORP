"use client";

import React from "react";

const LogoTest = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Logo Test Page</h1>
      <p className="mb-4">Attempting to display the logo directly:</p>
      <img
        src="/atc-square-logo.png"
        alt="ACE TRUCKERS CORP Logo Test"
        className="block h-40 w-auto object-contain border-2 border-green-500" // Added a green border for visibility
      />
      <p className="mt-4 text-sm text-gray-600">
        If you see a green-bordered image above, the logo file is accessible.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:text-blue-700 underline">
        Return to Home
      </a>
    </div>
  );
};

export default LogoTest;