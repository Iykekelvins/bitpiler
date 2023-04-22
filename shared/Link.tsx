import { useRouter } from "next/router";
import { gsap } from "gsap";

import NextLink from "next/link";

const Link = ({ href, children, className }) => {
  const router = useRouter();

  return (
    <NextLink
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const transitionTl = gsap.timeline({
          defaults: { ease: "Power4.inOut", duration: 0.1 },

          onComplete: function () {
            // this.revert();
          },
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
            .fromTo(
              '[data-selector="transition"] h1 .char',
              {
                y: "100%",
              },
              {
                y: 0,
                stagger: 0.05,
                delay: 0.5,
                onComplete: () => {
                  router.push(href);
                },
              }
            )
            .to('[data-selector="transition"] h1 .char', {
              y: "-100%",
              stagger: 0.05,
              delay: 0.75,
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
            .to('[data-selector="transition"] h1 .char', {
              opacity: 0,
            })
            .to('[data-selector="transition"] h1 .char', {
              y: "100%",
              delay: 0.5,
            })
            .to('[data-selector="transition"] h1 .char', {
              opacity: 1,
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
