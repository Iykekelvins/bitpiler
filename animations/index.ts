import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Splitting from "splitting";

export const openMenu = () => {
  const btn = document.querySelector("nav button");
  btn?.classList.add("open");

  const width = window.innerWidth;
  const menuTl = gsap.timeline({ defaults: { duration: 0.3 } });

  menuTl
    .to("nav", {
      backgroundColor: "transparent",
    })
    .to("nav a", {
      opacity: 0,
      ease: "none",
    })
    .to(".line-2", {
      xPercent: -100,
      opacity: 0,
      display: "none",
    })
    .to([".line-1", ".line-3"], {
      width: "100%",
    })
    .to(
      ".line-3",
      {
        rotate: "-45deg",
      },
      "-=0.35"
    )
    .to(
      ".line-1",
      {
        rotate: "45deg",
        top:
          width <= 480 && width >= 375
            ? "10px"
            : width >= 320
            ? "11px"
            : "12px",
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
  const menuTl = gsap.timeline({ defaults: { duration: 0.3 } });

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

  gsap.to(
    selector,
    // {
    //   yPercent: 100,
    //   opacity: 0,
    // },
    {
      yPercent: 0,
      opacity: 1,
      stagger: stagger,
      ease: "Expo.in",
      scrollTrigger: {
        trigger: selector,
        // markers: true,
        start: "top bottom-=50",
      },
    }
  );
};

export const animateGroup = (parent) => {
  gsap.utils.toArray(parent).forEach((e: HTMLElement) => {
    const words = e.querySelectorAll(".word");
    const chars = e.querySelectorAll(".char");

    animateText(chars, 0.025);
    animateText(words);
  });
};

const hoverTl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.1, ease: "Expo.inOut" },
});

export const linkHover = (e) => {
  const chars = e.currentTarget.querySelectorAll(".char");
  chars.forEach((char) => {
    char.setAttribute("data-selector", "nav-link");
  });
  hoverTl.to(chars, {
    yPercent: -100,
    ease: "Expo.inOut",
    duration: 0.35,
  });
  hoverTl.play();
};

export const linkHoverOut = (e) => {
  const chars = e.currentTarget.querySelectorAll(".char");

  hoverTl.to(chars, {
    yPercent: 0,
    duration: 0.35,
    delay: 0.15,
    ease: "Expo.inOut",
  });
};

export const animateLogo = () => {
  gsap.utils.toArray(".entry-logo").forEach((item: HTMLImageElement) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=50",
        },
      }
    );
  });
};

export const animateTeamImgs = () => {
  gsap.utils
    .toArray('[data-selector="member"] img')
    .forEach((item: HTMLImageElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=150",
          },
        }
      );
    });
};
