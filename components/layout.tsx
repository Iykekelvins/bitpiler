import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Splitting from "splitting";

import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";
import MobileNav from "@/shared/Layout/MobileNav";
import Lenis from "@studio-freight/lenis";
import Transition from "@/shared/Layout/Transition";
import Cursor from "@/shared/Layout/Cursor";
import GlobalContext from "@/store/context";
import { gsap } from "gsap";
import { links } from "@/utils";
import Logo from "@/shared/Logo";

const Layout = ({ children }) => {
  const router = useRouter();
  const isComingSoon = router.pathname === "/coming-soon";

  const [link, setLink] = useState<any>(null);

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

  useEffect(() => {
    router.pathname === "/coming-soon"
      ? (window.document.body.style.backgroundColor = "#000a20")
      : (window.document.body.style.backgroundColor = "#fff");
  }, [router.pathname]);

  useEffect(() => {
    router.beforePopState((event) => {
      const linkText = links.find((link) => link.url === event.as);
      sessionStorage.setItem("isSession", "true");
      if (event.as === "/") {
        setLink(<Logo />);
      } else {
        setLink(linkText?.title);
      }

      const transitionTl = gsap.timeline({
        defaults: { ease: "Power4.inOut", duration: 0.1 },
      });

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
            router.push(event.url);
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
      return false;
    });

    if (!sessionStorage.getItem("isSession")) {
      router.reload();
    }
    return () => {
      router.beforePopState(() => {
        return true;
      });
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        link,
        setLink: (e) => setLink(e),
      }}
    >
      <main>
        <Transition />
        <Cursor />
        <Navbar />
        <MobileNav />
        {children}
        {!isComingSoon && <Footer />}
      </main>
    </GlobalContext.Provider>
  );
};

export default Layout;
