import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";
import Products from "./Products";
import Testimonials from "./Testimonials";

import c from "./Home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
  // const [doc, setDoc] = useState(null);
  useEffect(() => {
    if (typeof document === "undefined") {
      null;
    } else {
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
