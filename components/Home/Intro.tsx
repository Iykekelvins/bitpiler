import Buttons from "@/shared/Buttons";
import Link from "next/link";

import c from "./Home.module.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Intro = () => {
  const ref = useRef(null);
  // useLayoutEffect(() => {
  //   const el = document.querySelector('[data-element="home_p"]');
  //   console.log(window.getComputedStyle(el).getPropertyValue("--line-index"));
  // }, []);

  return (
    <section className={c.home_intro} data-selector="home-intro">
      <div className={c.home_intro_left}>
        <h4 data-splitting="chars">WHAT WE DO</h4>
        <h1 data-splitting="words">Breakthrough ideas. Elegantly designed.</h1>
      </div>
      <div className={c.home_intro_right}>
        <p data-splitting="words">
          We&apos;ll study your product and give you solutions that will connect
          your objectives with your users&apos; needs. And then we will
          implement them. Our team consists of over 30 design and development
          experts who work with our clients to scale their businesses to from 10
          to 100 mln by building digital products. We&apos;ve helped multiple
          companies across various industries achieve their goals.
        </p>
        <Link href="/our-team">
          <Buttons title="Meet our Team" blackText />
        </Link>
      </div>
    </section>
  );
};

export default Intro;
