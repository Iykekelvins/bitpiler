import Buttons from "@/shared/Buttons";
import Image from "next/image";

import c from "./Careers.module.scss";

const Hero = () => {
  return (
    <section className={c.careers_hero} data-selector="hero">
      <div className={c.careers_hero_intro}>
        <div>
          <h4 data-splitting="chars">CAREERS IN BITPILER</h4>
          <h1 data-splitting="words">Come Work With Us. Ever-growing Team.</h1>
        </div>
        <div className={c.careers_hero_intro_btn} data-selector="hero-btn">
          <Buttons title="Open Positions" blackText />
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
