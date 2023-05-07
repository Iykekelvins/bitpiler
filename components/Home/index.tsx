import { useEffect } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

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
    animateGroup('[data-animation="text"]');
    Splitting();
    if (!isSession) {
      gsap
        .timeline({ defaults: { ease: "Expo.inOut", delay: 0.5 } })
        .to(
          [
            "[data-selector='hero'] .word",
            '[data-selector="home-btns"] button',
          ],
          {
            y: 0,
            opacity: 1,
            stagger: 0.01,
          }
        )
        .to(".arrow", {
          opacity: 1,
        });
    }
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
