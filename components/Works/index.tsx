import { useEffect } from "react";
import { projects } from "@/utils";
import { gsap } from "gsap";
import { animateGroup, animateText } from "@/animations";

import Image from "next/image";
import Link from "next/link";

import c from "./Works.module.scss";

const Works = () => {
  useEffect(() => {
    animateText("[data-selector='works-intro'] h4 .char", 0.025);
    animateText("[data-selector='works-intro'] h1 .word");

    animateGroup("[data-selector='works-case']");
  }, []);
  return (
    <div className={c.works}>
      <div className={c.works_intro} data-selector="works-intro">
        <h4 data-splitting="chars">OUR WORKS</h4>
        <h1 data-splitting="words">Selected Projects</h1>
      </div>
      <ul>
        {projects.map((pjt, i) => (
          <li key={pjt.title} data-selector="works-case">
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
