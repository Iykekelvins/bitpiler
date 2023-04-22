import { values } from "@/utils";
import Image from "next/image";

import c from "./About.module.scss";
import { useEffect } from "react";
import { gsap } from "gsap";

const Values = () => {
  useEffect(() => {
    gsap.utils.toArray(".entry-logo").forEach((item: HTMLImageElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=50",
          },
        }
      );
    });
  });
  return (
    <section className={c.about_values}>
      <div className={c.about_values_intro} data-animation="text">
        <h4 data-splitting="chars">WHAT WE STAND FOR</h4>
        <h1 data-splitting="words">Our Values</h1>
      </div>
      <div className={c.about_values_grid}>
        {values.map((val) => (
          <div key={val.title} data-animation="text">
            <Image
              src={val.logo}
              height={40}
              width={40}
              alt="icon"
              className="entry-logo"
            />
            <h3 data-splitting="words">{val.title}</h3>
            <p data-splitting="words">{val.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
