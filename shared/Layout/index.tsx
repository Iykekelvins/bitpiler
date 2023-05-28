import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { links } from "@/utils";

import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";
import MobileNav from "@/shared/Layout/MobileNav";
import Lenis from "@studio-freight/lenis";
import Transition from "@/shared/Layout/Transition";
import Cursor from "@/shared/Layout/Cursor";
import GlobalContext from "@/store/context";
import Logo from "@/shared/Logo";

// const Navbar = dynamic(() => import("@/shared/Layout/Navbar"), { ssr: false });
// const Footer = dynamic(() => import("@/shared/Layout/Footer"), { ssr: false });

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
    gsap.config({ nullTargetWarn: false });
  }, []);

  useEffect(() => {
    router.pathname === "/coming-soon"
      ? (window.document.body.style.backgroundColor = "#000a20")
      : (window.document.body.style.backgroundColor = "#fff");
  }, [router.pathname]);

  // page transition on navigation buttons click event
  useEffect(() => {
    router.beforePopState((event) => {
      const linkText = links.find((link) => link.url === event.as);

      sessionStorage.setItem("isSession", "true");
      if (event.as === "/") {
        setLink(<Logo />);
      } else if (event.as === "/our-team") {
        setLink("our team");
      } else if (event.as.includes("case")) {
        setLink("case study");
      } else {
        setLink(linkText?.title);
      }

      const transitionTl = gsap.timeline();

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
              router.push(event.as);
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

      return false;
    });

    // if (!sessionStorage.getItem("isSession")) {
    //   router.reload();
    //   sessionStorage.setItem("isSession", "true");
    // }

    // router.
    return () => {
      router.beforePopState(() => {
        return true;
      });
    };
  }, [router]);

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
