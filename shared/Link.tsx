import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";

const Link = ({ href, children }) => {
  const router = useRouter();
  return (
    <NextLink
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const transitionTl = gsap.timeline({
          defaults: { ease: "Expo.inOut", duration: 0.1 },
          onComplete: function () {
            this.time(0).kill();
          },
        });
        transitionTl
          .to('[data-selector="transition-child"]', {
            x: 0,
          })
          .to('[data-selector="transition"] h1 .char', {
            y: 0,
            stagger: 0.1,
            delay: 0.5,
          })
          .to('[data-selector="transition"] h1 .char', {
            y: "-100%",
            stagger: 0.1,
            delay: 0.5,
          })
          .to(
            '[data-selector="transition-child"]',

            {
              y: "-100%",
              onComplete: () => {
                router.push(href);
                // gsap.set("", {});
              },
            },
            "+=0.25"
          );
      }}
    >
      {children}
    </NextLink>
  );
};

export default Link;
