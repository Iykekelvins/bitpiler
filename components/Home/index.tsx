import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { testimonials } from "@/utils";

import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Splitting from "splitting";
import Head from "next/head";

import c from "./Home.module.scss";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parent = useRef(null);
  const parentEls = gsap.utils.selector(parent);

  useEffect(() => {
    Splitting();
    const isSession = sessionStorage.getItem("isSession");
    const isPreloader = sessionStorage.getItem("preloader");

    // hero
    gsap
      .timeline({
        defaults: {
          ease: "Expo.inOut",
          delay: isPreloader === "done" ? 2.65 : 2,
        },
      })
      .to(
        ["[data-selector='hero'] .word", '[data-selector="home-btns"] button'],
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
        }
      )
      .to(
        ".arrow",
        {
          opacity: 1,
        },
        `${isSession ? "1.2" : "-=2.75"}`
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
  }, [parentEls]);

  useEffect(() => {
    const testimonials = gsap.utils.toArray("[data-selector='testimonial']");
    setInterval(() => {
      // isInViewport(testimonials[0]);
    }, 1000);
  }, []);

  return (
    <div className={c.home} ref={parent}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Home</title>
      </Head>
      <Hero />
      <Intro />
      <Services />
      <Works />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;
