import { useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";
import MobileNav from "@/shared/Layout/MobileNav";
import Lenis from "@studio-freight/lenis";
// import Transition from "@/shared/Layout/Transition";
import Splitting from "splitting";
import Cursor from "@/shared/Layout/Cursor";

const Layout = ({ children }) => {
  const router = useRouter();
  const isComingSoon = router.pathname === "/coming-soon";

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
    <main>
      <Cursor />
      <Navbar />
      <MobileNav />
      {/* <Transition /> */}
      {children}
      {!isComingSoon && <Footer />}
    </main>
  );
};

export default Layout;
