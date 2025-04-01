import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ScrollDots from "../components/ScrollDots";
import DisplayRepair from "../pages/DisplayRepair";
import BatteryRepair from "../components/BatteryRepair";
import WhyUs from "../components/WhyUs";

const Home = () => (
  <>
    <ScrollDots />
    <Hero />
    <Services />
    <WhyUs />
    <Contact />
  </>
);

export default Home;
