import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [hasAttr, setHasAttr] = useState("");

  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current?.clientWidth / 2;
      const mouseY = clientY - cursorRef.current?.clientHeight / 2;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    const mouseOverHandler = (e) => {
      if (e.target.getAttribute("data-selector") === "case") {
        setHasAttr("case");

        gsap.to("[data-selector='cursor']", {
          height: "4rem",
          width: "4rem",
          background: "rgba(0,0,0,0.5)",
          border: "1px solid transparent",
        });
      } else if (e.target.getAttribute("data-selector") === "nav-link") {
        // console.log(true);
        gsap.to("[data-selector='cursor']", {
          background: "transparent",
          border: "1px solid #00D161",
        });
      } else {
        gsap.to("[data-selector='cursor']", {
          height: "1rem",
          width: "1rem",
          background: " #00D161",
          border: "1px solid #00D161",
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

  return { x: mousePosition.x, y: mousePosition.y, hasAttr, cursorRef };
}
