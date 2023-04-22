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

const Layout = ({ children }) => {
  const router = useRouter();
  const isComingSoon = router.pathname === "/coming-soon";

  const [link, setLink] = useState("");

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
