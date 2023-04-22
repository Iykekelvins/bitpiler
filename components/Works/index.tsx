import { useEffect } from "react";
import { projects } from "@/utils";
import { gsap } from "gsap";
import { animateGroup } from "@/animations";

import Image from "next/image";
import Link from "next/link";
import Splitting from "splitting";

import c from "./Works.module.scss";

const Works = () => {
  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");

    animateGroup('[data-animation="text"]');
    Splitting();
    setTimeout(
      () => {
        gsap.timeline({ defaults: { ease: "power4.in" } }).to(
          "[data-selector='hero'] .word",

          {
            y: 0,
            opacity: 1,
            stagger: 0.01,
          }
        );
      },
      isSession ? 1000 : 0
    );
  }, []);
  return (
    <div className={c.works}>
      <div className={c.works_intro} data-selector="hero">
        <h4 data-splitting="chars">OUR WORKS</h4>
        <h1 data-splitting="words">Selected Projects</h1>
      </div>
      <ul>
        {projects.map((pjt, i) => (
          <li key={pjt.title} data-animation="text">
            <Link
              href={`/works/case/${pjt.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              <div style={{ overflow: "hidden" }}>
                <Image
                  src={pjt.img}
                  width={480}
                  height={668}
                  alt="project image"
                  data-selector="case"
                  data-bg={pjt.bg}
                />
              </div>
              <div>
                <h4 data-splitting="chars">{pjt.title}</h4>
                <h2 data-splitting="words">{pjt.info}</h2>
                <p data-splitting="words">{pjt.tags}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
