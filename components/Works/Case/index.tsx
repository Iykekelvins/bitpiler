import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

import Bottom from "./Bottom";
import Center from "./Center";
import Top from "./Top";
import Splitting from "splitting";
import Head from "next/head";

import c from "../Works.module.scss";

const Case = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parent = useRef(null);
  const parentEls = gsap.utils.selector(parent);

  useEffect(() => {
    Splitting();
    const isSession = sessionStorage.getItem("isSession");

    // hero
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

    // content
    parentEls("[data-animation='text']").forEach((e: any) => {
      const words = e.querySelectorAll(".word");
      const chars = e.querySelectorAll(".char");

      gsap.fromTo(
        words,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          ease: "Expo.in",
          scrollTrigger: {
            trigger: words,
            // markers: true,
            start: "top bottom-=50",
          },
        }
      );

      gsap.fromTo(
        chars,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          ease: "Expo.in",
          scrollTrigger: {
            trigger: chars,
            // markers: true,
            start: "top bottom-=50",
          },
        }
      );
    });
  }, []);
  return (
    <div className={c.case} ref={parent}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Case Study</title>
      </Head>
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Case;
