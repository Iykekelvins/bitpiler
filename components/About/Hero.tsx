import Image from "next/image";
import c from "./About.module.scss";

const Hero = () => {
  return (
    <div className={c.about_hero}>
      <div className={c.about_hero_intro} data-selector="hero">
        <h4 data-splitting="chars">WHAT WE DO</h4>
        <h1 data-splitting="words">Breakthrough ideas. Elegantly designed.</h1>
        <p data-splitting="words">
          We&apos;ll study your product and give you solutions that will connect
          your objectives with your users&apos; needs. And then we will
          implement them. Our team consists of over 30 design and development
          experts who work with our clients to scale their businesses to from 10
          to 100 mln by building digital products. We&apos;ve helped multiple
          companies across various industries achieve their goals.
        </p>
      </div>
      <div className={c.about_hero_imgs}>
        <Image
          src="/assets/images/about-img-1.png"
          width={965.14}
          height={451.71}
          alt="image of a lady"
        />
        <Image
          src="/assets/images/about-img-2.png"
          width={562}
          height={334}
          alt="image of a lady and a guy"
        />
      </div>
    </div>
  );
};

export default Hero;
