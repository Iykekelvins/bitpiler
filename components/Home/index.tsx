import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";

import Splitting from "splitting";

import c from "./Home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
  // const [doc, setDoc] = useState(null);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     Splitting();
  //   }
  // }, []);

  return (
    <div className={c.home}>
      <Hero />
      <Intro />
      <Services />
      <Works />
    </div>
  );
};

export default Home;
