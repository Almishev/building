"use client";
import { useEffect, useState } from "react";

// components
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Topbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
