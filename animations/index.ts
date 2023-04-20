import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Splitting from "splitting";

export const menuTl = gsap.timeline({
  defaults: { duration: 0.1, ease: "Expo.inOut" },
});

export const openMenu = () => {
  const btn = document.querySelector("nav button");
  btn?.classList.add("open");

  const width = window.innerWidth;

  menuTl
    .to("nav", {
      backgroundColor: "transparent",
    })
    .to("nav a", {
      opacity: 0,
    })
    .to(".line-2", {
      xPercent: -100,
      opacity: 0,
      display: "none",
    })
    // .to(
    //   ".line-2",
    //   {
    //     display: "none",
    //     // duration:0.25
    //     duration: 0.25,
    //   },
    //   "+=0.25"
    // )
    .to([".line-1", ".line-3"], {
      width: "100%",
    })
    .to(".line-3", {
      rotate: "-45deg",
    })
    .to(
      ".line-1",
      {
        rotate: "45deg",
        top:
          width <= 480 && width > 320 ? "10px" : width >= 320 ? "11px" : "12px",
      },
      "-=0.25"
    )
    .to("[data-selector='mobile-nav']", {
      pointerEvents: "all",
      delay: 0.5,
      // duration: 0.5,
      x: 0,
    })
    .to("[data-selector='mobile-nav'] div", {
      x: 0,
      pointerEvents: "all",
    })
    .to(
      [
        "[data-selector='mobile-nav'] ul li a",
        "[data-selector='mobile-nav'] footer button",
      ],
      {
        y: 0,
        delay: 0.15,
        stagger: {
          each: 0.1,
          from: "end",
        },
      }
    )
    .to(
      "[data-selector='toggle']",
      {
        "--bg": "#000",
        // duration: 0.5,
      },
      "-=0.5"
    )
    .to(
      "[data-selector='toggle'] span",
      {
        backgroundColor: "#fff",
      },
      "-=0.5"
    );
};
export const closeMenu = () => {
  const btn = document.querySelector("nav button");
  btn?.classList.remove("open");

  menuTl
    .to(
      [
        "[data-selector='mobile-nav'] ul li a",
        "[data-selector='mobile-nav'] footer button",
      ],
      {
        y: "100%",
        delay: 0.15,
        stagger: {
          each: 0.1,
          from: "end",
        },
      }
    )
    .to(
      "[data-selector='toggle']",
      {
        "--bg": "transparent",
        // duration: 0.5,
      },
      "+=0.35"
    )
    .to(["[data-selector='mobile-nav'] div", "[data-selector='mobile-nav'] "], {
      x: "-100%",
      pointerEvents: "none",
    })
    .to("[data-selector='toggle'] span", {
      backgroundColor: "#000a20",
    })
    .to(
      [".line-1", ".line-3"],
      {
        width: "50%",
        top: 0,
        rotate: 0,
      }
      // "-=0.25"
    )
    .to(".line-2", {
      xPercent: 0,
      opacity: 1,
      display: "unset",
    })

    .to("nav ", {
      background: "var(--navBg)",
    })
    .to("nav a", {
      opacity: 1,
    });
};

export const animateText = (selector, stagger = 0.01) => {
  gsap.registerPlugin(ScrollTrigger);
  Splitting();

  gsap.fromTo(
    selector,
    {
      yPercent: 100,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      stagger: stagger,
      ease: "power4.in",
      scrollTrigger: {
        trigger: selector,
        // markers: true,
        start: "top bottom-=50",
      },
    }
  );
};

export const animateGroup = (parent) => {
  gsap.utils.toArray(parent).forEach((e: HTMLLIElement) => {
    const words = e.querySelectorAll(".word");
    const chars = e.querySelectorAll(".char");

    animateText(chars, 0.025);
    animateText(words);
  });
};
