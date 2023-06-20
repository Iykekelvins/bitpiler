import { gsap } from "gsap";

import Buttons from "@/shared/Buttons";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import c from "./Careers.module.scss";

const Hero = () => {
  const mq = gsap.matchMedia();

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    smoothWheel: true,
    // mouseMultiplier: 1,
    // smoothTouch: false,
    // touchMultiplier: 2,
    // infinite: false,
  });

  return (
    <section className={c.careers_hero} data-selector="hero">
      <div className={c.careers_hero_intro}>
        <div>
          <h4 data-splitting="chars">CAREERS IN BITPILER</h4>
          <h1 data-splitting="words">Come Work With Us. Ever-growing Team.</h1>
        </div>
        <div className={c.careers_hero_intro_btn} data-selector="hero-btn">
          <a onClick={() => lenis.scrollTo("#positions")} href="#positions">
            <Buttons title="Open Positions" blackText />
          </a>
        </div>
      </div>
      <div
        className={`${c.careers_hero_img} cover img`}
        data-selector="case-cover"
      >
        <Image
          src="/assets/images/careers-header.png"
          height={1043}
          width={1563}
          alt="picture of a lady and a guy using a computer"
        />
      </div>
    </section>
  );
};

export default Hero;
