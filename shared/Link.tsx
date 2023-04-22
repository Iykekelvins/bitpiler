import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { gsap } from "gsap";

import NextLink from "next/link";
import GlobalContext from "@/store/context";
import Splitting from "splitting";

const Link = ({ href, children, className, linkText = "" }) => {
  const router = useRouter();

  const ctx = useContext(GlobalContext);

  useEffect(() => {
    window.onbeforeunload = function () {
      sessionStorage.clear();
      Splitting();
    };
  }, []);

  return (
    <NextLink
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        sessionStorage.setItem("isSession", "true");
        ctx.setLink(!linkText ? children : linkText);

        const transitionTl = gsap.timeline({
          defaults: { ease: "Power4.inOut", duration: 0.1 },
        });

        if (router.pathname === href) {
          window.scrollTo(0, 0);
        } else {
          transitionTl
            .fromTo(
              [
                '[data-selector="transition-left"]',
                '[data-selector="transition-right"]',
              ],
              {
                x: "-100%",
              },
              {
                x: 0,
              }
            )
            .to('[data-selector="transition"] h1', {
              y: 0,
              delay: 0.5,
              opacity: 1,
              onComplete: () => {
                router.push(href);
              },
            })
            .to('[data-selector="transition"] h1', {
              y: "-100%",
              delay: 0.75,
              opacity: 0,
            })
            .to(
              '[data-selector="transition-left"]',

              {
                x: "-100%",
                delay: 0.5,
              }
            )
            .to(
              '[data-selector="transition-right"]',

              {
                x: "100%",
              },
              "-=0.05"
            )
            .to('[data-selector="transition"] h1', {
              opacity: 0,
            })
            .to('[data-selector="transition"] h1', {
              y: "100%",
              delay: 0.5,
            });
        }
      }}
    >
      {children}
    </NextLink>
  );
};

export default Link;
