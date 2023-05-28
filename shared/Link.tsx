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

        const transitionTl = gsap.timeline();

        if (router.pathname === href) {
          window.scrollTo(0, 0);
        } else {
          transitionTl
            .fromTo(
              '[data-selector="transition"]',
              {
                height: 0,
              },
              {
                height: "100vh",
                ease: "power3.in",
                duration: 0.75,
              }
            )
            .fromTo(
              '[data-selector="transition"] h1 span',
              {
                y: 100,
              },
              {
                y: 0,
                delay: 0.25,
                ease: "Expo.inOut",
                onComplete: () => {
                  router.push(href);
                },
              }
            )
            .to('[data-selector="transition"] h1 span', {
              y: "-100%",
              delay: 0.5,
              ease: "Expo.inOut",
            })
            .to('[data-selector="transition"]', {
              height: 0,
              ease: "power3.in",
              duration: 0.75,
            });
        }
      }}
    >
      {children}
    </NextLink>
  );
};

export default Link;
