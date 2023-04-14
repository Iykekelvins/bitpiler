import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { projects } from "@/utils";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

import c from "./Works.module.scss";

const Works = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.to("[data-animation='move-up'] h2", {
    //   xPercent: 100,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "[data-animation='move-up']",
    //     scrub: 1,
    //     start: "top center",
    //     end: "center center",
    //     markers: true,
    //   },
    // });
  }, []);
  return (
    <div className={c.works}>
      <div className={c.works_intro}>
        <h4>OUR WORKS</h4>
        <h1>Selected Projects</h1>
      </div>
      <ul>
        {projects.map((pjt, i) => (
          <li key={pjt.title}>
            <Link
              href={`/works/case/${pjt.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              <div
                ref={ref}
                data-animation="move-up"
                style={{ overflow: "hidden" }}
              >
                <Image
                  src={pjt.img}
                  width={480}
                  height={668}
                  alt="project image"
                />
              </div>
              <div data-animation="move-up">
                <h4>{pjt.title}</h4>
                <h2>{pjt.info}</h2>
                <p>{pjt.tags}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
