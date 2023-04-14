import { useEffect } from "react";
import Buttons from "@/shared/Buttons";

import c from "./Home.module.scss";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    const selector = document.querySelector("[data-selector='home_hero']");
    const spans = selector?.querySelectorAll("h1 span");

    // spans?.forEach((span) =>
    //   console.log(getComputedStyle(span).ge("--line-index"))
    // );
  }, []);
  return (
    <section className={c.home_hero} data-selector="home_hero">
      <div className={c.home_hero_title}>
        <svg
          width="97"
          height="87"
          viewBox="0 0 97 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.8523 73.5153C59.8476 80.8453 76.3045 76.2881 83.6098 63.3366C90.915 50.3851 86.3023 33.9437 73.307 26.6138C60.3117 19.2838 43.8548 23.8409 36.5495 36.7924C29.2443 49.7439 33.857 66.1853 46.8523 73.5153Z"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.7108 66.6742C59.9151 71.8658 71.5712 68.6381 76.7453 59.4648C81.9195 50.2916 78.6524 38.6465 69.4481 33.4548C60.2438 28.2632 48.5877 31.4909 43.4136 40.6642C38.2394 49.8374 41.5065 61.4825 50.7108 66.6742Z"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.5168 58.154C59.9996 60.6825 65.6765 59.1105 68.1964 54.6428C70.7164 50.1751 69.1252 44.5036 64.6424 41.9751C60.1597 39.4466 54.4828 41.0186 51.9628 45.4863C49.4428 49.954 51.034 55.6255 55.5168 58.154Z"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.4089 17.1815L60.1073 50.4064"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.7674 26.9796L26.0419 29.3604L16.0581 19.6286L25.6729 16.5006L27.6791 6.93039L37.6618 16.664L36.7674 26.9796Z"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 data-splitting="chars">
          Build and ship platform products efficiently with BitPiler
        </h1>
      </div>
      <p data-splitting="lines">
        Broken into four functional divisions and executed by cross-disciplinary
        teams, our product development practices take breakthrough ideas and
        translate them into elegantly designed experiences.
      </p>
      <div className={c.home_hero_btns}>
        <Link href="/contact">
          <Buttons title="Get Started" arrow started />
        </Link>
        <Buttons title="Watch Showreel" play />
      </div>
    </section>
  );
};

export default Hero;
