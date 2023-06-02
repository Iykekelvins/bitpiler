import { useEffect, useRef } from "react";
import { projects } from "@/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";
import Link from "@/shared/Link";
import Splitting from "splitting";
import Head from "next/head";

import c from "./Works.module.scss";

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mq = gsap.matchMedia();

  const parent = useRef(null);
  const parentEls = gsap.utils.selector(parent);

  useEffect(() => {
    Splitting();
    const isSession = sessionStorage.getItem("isSession");
    const isPreloader = sessionStorage.getItem("preloader");

    // hero
    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isPreloader ? 2.65 : 1.85 },
      })
      .to(
        ["[data-selector='hero'] .char", "[data-selector='hero'] .word"],

        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
        }
      );

    // content
    parentEls("[data-animation='text']").forEach((e: any) => {
      const words = e.querySelectorAll(".word");
      const chars = e.querySelectorAll(".char");

      gsap.fromTo(
        words,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          ease: "Expo.in",
          scrollTrigger: {
            trigger: words,
            // markers: true,
            start: "top bottom-=50",
          },
        }
      );

      gsap.fromTo(
        chars,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          ease: "Expo.in",
          scrollTrigger: {
            trigger: chars,
            // markers: true,
            start: "top bottom-=50",
          },
        }
      );
    });

    // return () => {
    //   pin.kill();
    // };
  }, [parentEls]);

  useEffect(() => {
    const works = gsap.utils.toArray('[data-selector="work"] .cover');
    const works2 = gsap.utils.toArray('[data-selector="work"] .cover img');

    works.forEach((work: HTMLElement, i) => {
      mq.add("(min-width:901px)", () => {
        ScrollTrigger.create({
          trigger: work,
          pin: work,
          start: "top top+=100",
          end: works.length - i === 1 ? "+=500" : "+=1000",
          // markers: true,
          // pin,
        });
      });
    });

    works2.forEach((work: HTMLElement, i) => {
      mq.add("(min-width:901px)", () => {
        gsap.to(work, {
          y: -100,
          scale: 1,
          scrollTrigger: {
            trigger: work,
            start: "top bottom",
            // end: works.length - i === 1 ? "-=500" : "+=1000",
            // end: "bottom bottom +=200",
            scrub: 1,
            // markers: true,
          },
        });
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className={c.works} ref={parent}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Works</title>
      </Head>
      <div className={c.works_intro} data-selector="hero">
        <h4 data-splitting="chars">OUR WORKS</h4>
        <h1 data-splitting="words">Selected Projects</h1>
      </div>
      <ul>
        {projects.map((pjt, i) => (
          <li key={pjt.title} data-animation="text" data-selector="work">
            <Link
              href={`/works/case/${pjt.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className={""}
              linkText="case study"
            >
              <div className={`${c.cover} cover`}>
                {" "}
                <Image
                  src={pjt.img}
                  width={480}
                  height={668}
                  alt="project image"
                  data-selector="case"
                  data-bg={pjt.bg}
                />
              </div>
              <div className={c.pdt_info}>
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
