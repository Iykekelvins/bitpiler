import Buttons from "@/shared/Buttons";
import Image from "next/image";

import c from "./Careers.module.scss";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
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
          <a
            href="#positions"
            onClick={() => lenis.scrollTo("#positions", { offset: -60 })}
          >
            <Buttons title="Open Positions" blackText />
          </a>
        </div>
      </div>
      <div className={c.careers_hero_img}>
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
