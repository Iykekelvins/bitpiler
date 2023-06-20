import { useEffect } from "react";
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
    const isPreloader = sessionStorage.getItem("preloader");

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
        defaults: { ease: "Expo.inOut" },
      })
      .to(
        ["[data-selector='hero'] .char", "[data-selector='hero'] .word"],

        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          delay: isPreloader ? 2.65 : 1.85,
        }
      )
      .to(
        "[data-selector='hero-btn'] button",
        {
          y: 0,
        },
        "-=0.5"
      )
      .fromTo(
        ".img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      ),
      "-=1";

    const scrollImgs = document.querySelectorAll(".slide-img");

    const mq = gsap.matchMedia();

    mq.add("(min-width:481px)", () => {
      scrollImgs.forEach((img: HTMLElement, i) => {
        gsap.fromTo(
          img,
          {
            y: 100,
          },
          {
            y: 0,
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              // end: works.length - i === 1 ? "-=500" : "+=1000",
              end: "top top",
              scrub: true,
              // markers: true,
            },
          }
        );
      });
    });
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
