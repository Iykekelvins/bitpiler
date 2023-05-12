import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./Hero";
import Info from "./Info";
import InfoCards from "./InfoCards";
import Splitting from "splitting";

import c from "./Bitlearn.module.scss";

const Bitlearn = () => {
  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");
    gsap.utils.toArray('[data-animation="text"]').forEach((e: any) => {
      const words = e.querySelectorAll(".word");
      const chars = e.querySelectorAll(".char");

      gsap.to(words, {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        ease: "Expo.in",
        scrollTrigger: {
          trigger: words,
          // markers: true,
          start: "top bottom-=50",
        },
      });

      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        ease: "Expo.in",
        scrollTrigger: {
          trigger: chars,
          // markers: true,
          start: "top bottom-=50",
        },
      });
    });

    gsap.registerPlugin(ScrollTrigger);

    Splitting();
    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isSession ? 1.85 : 0.5 },
      })
      .to(
        ["[data-selector='hero'] .char", "[data-selector='hero'] .word"],

        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
        }
      );
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
