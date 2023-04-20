import { useEffect } from "react";
import { animateGroup } from "@/animations";

import Hero from "./Hero";
import Statement from "./Statement";
import Values from "./Values";
import Products from "../Home/Products";
import OurTeam from "./OurTeam";

import c from "./About.module.scss";

const About = () => {
  useEffect(() => {
    animateGroup('[data-animation="text"]');
  }, []);
  return (
    <div className={c.about}>
      <Hero />
      <Statement />
      <Values />
      <Products />
      <OurTeam />
    </div>
  );
};

export default About;
