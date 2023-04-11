import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";
import Products from "./Products";
import Testimonials from "./Testimonials";

import Splitting from "splitting";

import c from "./Home.module.scss";
import { useEffect, useLayoutEffect, useState } from "react";

const Home = () => {
  // const [doc, setDoc] = useState(null);
  useLayoutEffect(() => {
    Splitting();
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
