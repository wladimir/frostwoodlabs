import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import CallToAction from "../components/CallToAction";

const Home: React.FC = () => {
  return (
    <div
      className="pt-16 min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <Hero />
      <Services />
      <Process />
      <CallToAction />
    </div>
  );
};

export default Home;
