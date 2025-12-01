"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import LandingPage from "./LandingPage"; // Import the new LandingPage component

const Index = () => {
  return (
    <>
      <LandingPage /> {/* Render the LandingPage component */}
      <MadeWithDyad />
    </>
  );
};

export default Index;