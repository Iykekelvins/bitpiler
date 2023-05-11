import { useEffect } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Bottom from "./Bottom";
import Center from "./Center";
import Top from "./Top";
import Splitting from "splitting";

import c from "../Works.module.scss";

const Case = () => {
  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");
    animateGroup('[data-animation="text"]');

    Splitting();
    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isSession ? 1.85 : 0.5 },
      })
      .fromTo(
        [
          "[data-selector='hero-case'] .char",
          "[data-selector='hero-case'] .word",
        ],
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
        }
      )
      .fromTo(
        "[data-selector='hero-case'] svg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        `${isSession ? "-=2.5" : "-=1"}`
      );
  }, []);
  return (
    <div className={c.case}>
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Case;
