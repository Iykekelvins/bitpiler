import Buttons from "@/shared/Buttons";
import c from "./Careers.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={c.careers_hero}>
      <div className={c.careers_hero_intro}>
        <div>
          <h4>CAREERS IN BITPILER</h4>
          <h1>Come Work With Us. Ever-growing Team.</h1>
        </div>
        <div>
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
