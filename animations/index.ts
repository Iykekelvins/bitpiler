import { gsap } from "gsap";

export const menuTl = gsap.timeline({
  defaults: { duration: 0.1, ease: "Expo.inOut" },
});

export const openMenu = () => {
  const btn = document.querySelector("nav button");
  btn?.classList.add("open");
  menuTl
    .to("nav", {
      backgroundColor: "transparent",
    })
    .to("nav a", {
      opacity: 0,
    })
    .to(".line-2", {
      opacity: 0,
      // xPercent: -100,
    })
    .to('[data-selector="toggle"]', {
      // top: 0,
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
        marginTop: "-1.95rem",
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
    .to("[data-selector='toggle']", {
      "--bg": "#000",
      duration: 0.5,
    })
    .to(
      "[data-selector='toggle'] span",
      {
        backgroundColor: "#fff",
      },
      "-=0.5"
    )
    .to(
      "[data-selector='toggle']",
      {
        top: "3.75rem",
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
      },
      "+=0.5"
    )
    .to("[data-selector='toggle'] span", {
      backgroundColor: "#000a20",
    })
    .to(
      "[data-selector='mobile-nav'] div",
      {
        x: "-100%",
      },
      "+=0.5"
    )
    .to("[data-selector='mobile-nav'] ", {
      x: "-100%",
      pointerEvents: "none",
    })
    .to([".line-1", ".line-3"], {
      width: "100%",
      rotate: 0,
    })
    .to(".line-1", {
      marginTop: "-1.75rem",
      // xPercent: -100,
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
    )
    .to("[data-selector='toggle']", {
      top: "2rem",
    })
    .to("nav ", {
      background: "var(--navBg)",
    })
    .to("nav a", {
      opacity: 1,
    });
};
