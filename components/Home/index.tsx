import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Splitting from "splitting";

import c from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");

    if (typeof window !== "undefined") {
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
    }

    gsap.registerPlugin(ScrollTrigger);
    Splitting();
    // animateGroup('[data-animation="text"]');

    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isSession ? 2 : 0.5 },
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
        `${isSession ? "1.2" : "-=0.75"}`
      );
  }, []);

  return (
    <div className={c.home}>
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
