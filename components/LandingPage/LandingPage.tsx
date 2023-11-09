"use client";
import React from "react";
import LandingText from "./LandingText";
import LandingImage from "./LandingImage";
import WhyKonHack from "./WhyKonHack";
import LandingOurBlog from "./LandingOurBlog";
import PricePage from "./PricePage";

const LandingPage = () => {
  return (
    <div className="pt-32 px-8 md:px-32">
      <div className="flex items-center">
        <div className="flex justify-center md:justify-between flex-grow">
          <LandingText />
          <div className="hidden md:block">
            <LandingImage />
          </div>
        </div>
      </div>
      <WhyKonHack />
      <PricePage />
      <div className="container mx-auto">
        <LandingOurBlog />
      </div>
    </div>
  );
};

export default LandingPage;
