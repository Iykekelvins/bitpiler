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
      isSession ? 1200 : 0
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
