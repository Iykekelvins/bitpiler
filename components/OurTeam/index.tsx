import { useEffect, useRef } from "react";
import { members } from "@/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateTeamImgs } from "@/animations";

import Image from "next/image";
import Splitting from "splitting";
import Head from "next/head";

import c from "./Team.module.scss";

const OurTeam = () => {
  gsap.registerPlugin(ScrollTrigger);
  const parent = useRef(null);
  const parentEls = gsap.utils.selector(parent);

  useEffect(() => {
    Splitting();
    const isSession = sessionStorage.getItem("isSession");

    // hero
    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isSession ? 1.85 : 2.95 },
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
    animateTeamImgs();
  }, [parentEls]);
  return (
    <div className={c.team} ref={parent}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Our Team</title>
      </Head>
      <div className={c.team_intro} data-selector="hero">
        <h4 data-splitting="chars">OUR GROWING TEAM</h4>
        <h1 data-splitting="words">
          Collaborating <br /> for Growth
        </h1>
        <p data-splitting="words">
          Our team consists of over 30 design and development experts who work
          with our clients to scale their businesses to from 10 to 100 mln by
          building digital products. We&apos;ve helped multiple companies across
          various industries achieve their goals.
        </p>
      </div>
      <div className={c.team_members}>
        {members.map((user, i) => (
          <div key={i} data-animation="text" data-selector="member">
            <Image
              src={user.img}
              height={427}
              width={315}
              alt="team member image"
            />
            <h4 data-splitting="words">{user.name}</h4>
            <h5 data-splitting="words">{user.role}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
