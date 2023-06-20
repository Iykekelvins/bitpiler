import { useContext, useEffect } from "react";
import { gsap } from "gsap";

import AppContext from "@/context/generalContext";

import c from "./Layout.module.scss";

const Preloader = () => {
  const ctx = useContext<any>(AppContext);

  useEffect(() => {
    const tl = gsap.timeline();
    sessionStorage.setItem("preloader", "done");

    tl.to(
      [
        "[data-selector='preloader'] .left",
        "[data-selector='preloader'] .right",
      ],
      {
        x: "100%",
        stagger: 0.15,
        ease: "power3.inOut",
        duration: 1,
        delay: 1,
      }
    ).fromTo(
      ["[data-selector='main']"],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        onComplete: () => ctx.setIsLoaded(true),
      }
    );
  }, []);
  return (
    <div className={c.preloader} data-selector="preloader">
      <div className={`${c.preloader_left} left`}></div>
      <div className={`${c.preloader_right} right`}></div>
      {/* <div className={`${c.preloader_left} left_2`}></div>
      <div className={`${c.preloader_right} right_2`}></div> */}
    </div>
  );
};

export default Preloader;
