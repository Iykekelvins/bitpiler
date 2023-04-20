import { useEffect } from "react";
import { animateGroup } from "@/animations";

import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";
import Products from "./Products";
import Testimonials from "./Testimonials";

import c from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    animateGroup('[data-animation="text"]');
  }, []);

  return (
    <div className={c.home} data-barba="container">
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
