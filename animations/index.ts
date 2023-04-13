import { gsap } from "gsap";

export const menuTl = gsap.timeline({
  defaults: { duration: 0.2, ease: "Expo.out" },
});

export const openMenu = () => {
  const btn = document.querySelector("nav button");
  btn?.classList.add("open");
  menuTl
    .to(".line-2", {
      opacity: 0,
      // xPercent: -100,
    })
    .to([".line-1", ".line-3"], {
      width: "100%",
    })
    .to(".line-3", {
      top: 0,
      rotate: "-45deg",
    })
    .to(
      ".line-1",
      {
        rotate: "45deg",
      },
      "-=0.25"
    )
    .to("[data-selector='mobile-nav']", {
      pointerEvents: "all",
      delay: 0.15,
      x: 0,
    })
    .to("[data-selector='mobile-nav'] div", {
      x: 0,
      // delay: 0.45,
    })
    .to(
      [
        "[data-selector='mobile-nav'] ul li a",
        "[data-selector='mobile-nav'] button",
      ],
      {
        y: 0,
        delay: 0.15,
        stagger: {
          each: 0.1,
          from: "end",
        },
      }
    );
};
export const closeMenu = () => {
  const btn = document.querySelector("nav button");
  btn?.classList.remove("open");

  menuTl
    .to(
      [
        "[data-selector='mobile-nav'] ul li a",
        "[data-selector='mobile-nav'] button",
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
    .to("[data-selector='mobile-nav'] div", {
      x: "-100%",
    })
    .to("[data-selector='mobile-nav'] ", {
      x: "-100%",
      pointerEvents: "none",
    })
    .to([".line-1", ".line-3"], {
      width: "100%",
      rotate: 0,
    })
    .to(".line-3", {
      top: "1.95rem",
      // xPercent: -100,
    })
    .to(".line-2", {
      opacity: 1,
    })
    .to(
      [".line-1", ".line-3"],
      {
        width: "50%",
      },
      "-=0.25"
    );
};
