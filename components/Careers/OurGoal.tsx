import { useEffect } from "react";
import { animateGroup } from "@/animations";

import Image from "next/image";

import c from "./Careers.module.scss";

const OurGoal = () => {
  useEffect(() => {
    animateGroup('[data-animation="text"]');
  }, []);
  return (
    <section className={c.careers_goal}>
      <div className={c.careers_goal_intro} data-animation="text">
        <div>
          <h4 data-splitting="chars">WHAT WE DO</h4>
          <h1 data-splitting="words">Our Goal</h1>
        </div>
        <div>
          <p data-splitting="words">
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs. And then we
            will implement them. Our team consists of over 30 design and
            development experts who work with our clients to scale their
            businesses to from 10 to 100 mln by building digital products.
            We&apos;ve helped multiple companies across various industries
            achieve their goals.
          </p>
        </div>
      </div>
      <div className={c.careers_goal_imgs}>
        <Image
          src="/assets/images/careers-img-1.png"
          width={480}
          height={701}
          alt="picture of a guy taking notes"
        />
        <Image
          src="/assets/images/careers-img-2.png"
          width={480}
          height={701}
          alt="picture of a lady holding a book"
        />
      </div>
    </section>
  );
};

export default OurGoal;
