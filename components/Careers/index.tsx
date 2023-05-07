import { useEffect } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Benefits from "./Benefits";
import Hero from "./Hero";
import OurGoal from "./OurGoal";
import Positions from "./Positions";
import Splitting from "splitting";

import c from "./Careers.module.scss";

const Careers = () => {
  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");

    animateGroup('[data-animation="text"]');
    Splitting();
    if (!isSession) {
      gsap
        .timeline({ defaults: { ease: "Expo.inOut", delay: 0.5 } })
        .to(
          "[data-selector='hero'] .word",

          {
            y: 0,
            opacity: 1,
            stagger: 0.01,
          }
        )
        .to(
          "[data-selector='hero-btn'] button",
          {
            y: 0,
          },
          "-=1"
        );
    }
  }, []);
  return (
    <div className={c.careers}>
      <Hero />
      <OurGoal />
      <Benefits />
      <Positions />
    </div>
  );
};

export default Careers;
