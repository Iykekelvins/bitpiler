import { useEffect } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Hero from "./Hero";
import Info from "./Info";
import InfoCards from "./InfoCards";
import Splitting from "splitting";

import c from "./Bitlearn.module.scss";

const Bitlearn = () => {
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
          "-=0.5"
        );
    }
  }, []);

  return (
    <div className={c.bitlearn}>
      <Hero />
      <Info />
      <InfoCards />
    </div>
  );
};

export default Bitlearn;
