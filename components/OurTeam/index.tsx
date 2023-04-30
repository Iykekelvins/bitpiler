import { useEffect } from "react";
import { members } from "@/utils";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Image from "next/image";
import Splitting from "splitting";

import c from "./Team.module.scss";

const OurTeam = () => {
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
    <div className={c.team} data-selector="hero">
      <div className={c.team_intro}>
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
          <div key={i} data-animation="text">
            <Image
              src={user.img}
              height={427}
              width={315}
              alt="team member image"
            />
            <h4 data-splititing="words">{user.name}</h4>
            <h5 data-splititing="words">{user.role}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
