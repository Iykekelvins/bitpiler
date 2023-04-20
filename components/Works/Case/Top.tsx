import Image from "next/image";
import c from "../Works.module.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { animateText } from "@/animations";

const Top = () => {
  return (
    <section className={c.case_top}>
      <div className={c.case_top_intro} data-animation="text">
        <h4 data-splitting="chars">EDUSPONSOR</h4>
        <h1 data-splitting="words">
          Cryptocurrency buying, selling and trading made easy.
        </h1>
      </div>
      <div className={c.case_top_info}>
        <div className={c.case_top_info_entry} data-animation="text">
          <svg
            width="1"
            height="50"
            viewBox="0 0 1 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1" height="50" fill="#00D161" />
          </svg>
          <div>
            <h5>Platforms</h5>
            <p>Mobile App, Branding, Marketing</p>
          </div>
        </div>
        <div className={c.case_top_info_entry} data-animation="text">
          <svg
            width="1"
            height="50"
            viewBox="0 0 1 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1" height="50" fill="#00D161" />
          </svg>
          <div>
            <h5>Deliverables</h5>
            <p>Mobile App, Branding, Marketing</p>
          </div>
        </div>
      </div>
      <div className={c.case_top_cover} data-animation="text">
        <Image
          src="/assets/images/case-cover.png"
          width={1440}
          height={656}
          alt="project cover image"
        />
      </div>
    </section>
  );
};

export default Top;
