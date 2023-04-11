import { projects } from "@/utils";
import c from "./Works.module.scss";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
const Works = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".work", {
      duration: 1,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: "top bottom-=200",
        end: "bottom top",
        markers: true,
      },
    });
  }, []);
  return (
    <div className={c.works}>
      <div className={c.works_intro}>
        <h4>OUR WORKS</h4>
        <h1>Selected Projects</h1>
      </div>
      <ul>
        {projects.map((pjt) => (
          <li key={pjt.title}>
            <Link
              href={`/works/case/${pjt.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              <div ref={ref} className="work" style={{ overflow: "hidden" }}>
                <Image
                  src={pjt.img}
                  width={480}
                  height={668}
                  alt="project image"
                />
              </div>
              <div>
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
