import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./Hero";
import Info from "./Info";
import InfoCards from "./InfoCards";
import Splitting from "splitting";
import Head from "next/head";

import c from "./Bitlearn.module.scss";

const Bitlearn = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parent = useRef(null);
  const parentEls = gsap.utils.selector(parent);

  useEffect(() => {
    Splitting();
    const isPreloader = sessionStorage.getItem("preloader");

    // hero
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
      .fromTo(
        ".imgs",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      ),
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
  }, [parentEls]);

  useEffect(() => {
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
    <div className={c.bitlearn} ref={parent}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Bitlearn</title>
      </Head>
      <Hero />
      <Info />
      <InfoCards />
    </div>
  );
};

export default Bitlearn;
