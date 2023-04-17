import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [hasAttr, setHasAttr] = useState("");

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { pageX, pageY } = e;
      setMousePosition({ x: pageX, y: pageY });
    };

    const mouseOverHandler = (e) => {
      if (e.target.getAttribute("data-selector") === "case") {
        setHasAttr("case");

        gsap.to("[data-selector='cursor']", {
          height: "4rem",
          width: "4rem",
          background: e.target.getAttribute("data-bg"),
        });
      } else {
        gsap.to("[data-selector='cursor']", {
          height: "1rem",
          width: "1rem",
          background: " #00D161",
        });
        setHasAttr("");
      }
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseover", mouseOverHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseover", mouseOverHandler);
    };
  }, []);

  return { x: mousePosition.x, y: mousePosition.y, hasAttr };
}
