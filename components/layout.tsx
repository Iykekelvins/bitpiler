import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import Splitting from "splitting";

import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";
import MobileNav from "@/shared/Layout/MobileNav";
import Lenis from "@studio-freight/lenis";
import Transition from "@/shared/Layout/Transition";
import Cursor from "@/shared/Layout/Cursor";
import { gsap } from "gsap";

const Layout = ({ children }) => {
  const router = useRouter();
  const isComingSoon = router.pathname === "/coming-soon";

  const [loaded, setIsLoaded] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    Splitting();
  }, []);

  // useEffect(() => {
  //   Splitting();
  //   const tl = gsap
  //     .timeline({
  //       defaults: { ease: "power4.in" },
  //     })
  //     .to(".main", {
  //       opacity: 0,
  //     })
  //     .to("[data-selector='transition-child']", {
  //       x: "0%",
  //     })
  //     .fromTo(
  //       ".transition-chars .char",
  //       {
  //         yPercent: 100,
  //         opacity: 0,
  //       },
  //       {
  //         yPercent: 0,
  //         opacity: 1,
  //         stagger: 0.05,
  //       }
  //     )
  //     .to(".transition-chars .char", {
  //       yPercent: -100,
  //       stagger: 0.05,
  //       delay: 0.25,
  //     })
  //     .to("[data-selector='transition-child']", {
  //       y: "-100%",
  //       onComplete: () => {
  //         tl.clear();
  //       },
  //     })
  //     .to(".main", {
  //       opacity: 1,
  //     });
  //   // .to(mainRef.current, {
  //   //   opacity: 1,
  //   //   delay: 0.5,
  //   // });

  //   tl.play();
  // }, []);

  useEffect(() => {
    router.pathname === "/coming-soon"
      ? (window.document.body.style.backgroundColor = "#000a20")
      : (window.document.body.style.backgroundColor = "#fff");
  }, [router.pathname]);

  return (
    <>
      <main ref={mainRef} className="main">
        <Transition />
        <Cursor />
        <Navbar />
        <MobileNav />
        {children}
        {!isComingSoon && <Footer />}
      </main>
    </>
  );
};

export default Layout;
