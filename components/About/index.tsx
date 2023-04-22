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
    setTimeout(
      () => {
        gsap.timeline({ defaults: { ease: "power4.in" } }).to(
          "[data-selector='hero'] .word",

          {
            y: 0,
            opacity: 1,
            stagger: 0.01,
          }
        );
      },
      isSession ? 1250 : 0
    );
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
