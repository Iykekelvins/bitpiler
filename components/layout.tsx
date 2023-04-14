import { useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";
import MobileNav from "@/shared/Layout/MobileNav";
import Lenis from "@studio-freight/lenis";

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
  }, []);

  useEffect(() => {
    router.pathname === "/coming-soon"
      ? (window.document.body.style.backgroundColor = "#000a20")
      : (window.document.body.style.backgroundColor = "#fff");
  }, [router.pathname]);

  return (
    <main>
      <Navbar />
      <MobileNav />
      {children}
      {!isComingSoon && <Footer />}
    </main>
  );
};

export default Layout;
