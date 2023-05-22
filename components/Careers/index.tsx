import { useEffect } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Benefits from "./Benefits";
import Hero from "./Hero";
import OurGoal from "./OurGoal";
import Positions from "./Positions";
import Splitting from "splitting";
import Head from "next/head";

import c from "./Careers.module.scss";

const Careers = () => {
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
      )
      .to(
        "[data-selector='hero-btn'] button",
        {
          y: 0,
        },
        `${isSession ? "-=2.5" : "-=1"}`
      );
  }, []);
  return (
    <div className={c.careers}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Join Us</title>
      </Head>
      <Hero />
      <OurGoal />
      <Benefits />
      <Positions />
    </div>
  );
};

export default Careers;
