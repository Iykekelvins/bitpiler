import Image from "next/image";

import c from "./Bitlearn.module.scss";

const Hero = () => {
  return (
    <div className={c.bitlearn_hero}>
      <div className={c.bitlearn_hero_intro}>
        <h4>BITLEARN</h4>
        <h1>
          Learn Technology. <br /> Accelerate Future.
        </h1>
        <p>
          Join the BitLearn Graduate Accelerator - an immersive program that
          gives you the head start to get a job in tech. With the right mentors,
          peer-to-peer critiques, and challenging projects, any skill can be
          mastered. BitLearn is a skills development and job placement platform
          that trains and connects young African talents with long-term
          employment.
        </p>
      </div>
      <div className={c.bitlearn_hero_imgs}>
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
