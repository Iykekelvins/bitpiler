import Image from "next/image";
import c from "../Works.module.scss";
import { useEffect } from "react";
import { gsap } from "gsap";

const Top = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     '[data-selector="cover"] img',
  //     {
  //       y: "-30vh",
  //     },
  //     {
  //       y: "30vh",
  //       scrollTrigger: {
  //         trigger: "[data-selector='cover']",
  //         scrub: true,
  //         start: "top center",
  //         end: "bottom top",
  //       },
  //     }
  //   );
  // }, []);
  return (
    <section className={c.case_top}>
      <div className={c.case_top_intro}>
        <h4>EDUSPONSOR</h4>
        <h1>Cryptocurrency buying, selling and trading made easy.</h1>
      </div>
      <div className={c.case_top_info}>
        <div className={c.case_top_info_entry}>
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
        <div className={c.case_top_info_entry}>
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
      <div className={c.case_top_cover} data-selector="cover">
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
