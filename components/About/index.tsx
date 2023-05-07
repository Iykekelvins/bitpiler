import { useEffect } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Hero from "./Hero";
import Statement from "./Statement";
import Values from "./Values";
import Products from "../Home/Products";
import OurTeam from "./OurTeam";
import Splitting from "splitting";

import c from "./About.module.scss";

const About = () => {
  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");

    animateGroup('[data-animation="text"]');
    Splitting();
    if (!isSession) {
      gsap.timeline({ defaults: { ease: "Expo.inOut", delay: 0.5 } }).to(
        "[data-selector='hero'] .word",

        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
        }
      );
    }
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
