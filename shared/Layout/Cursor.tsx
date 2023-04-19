import { useRef, useEffect, ReactElement } from "react";
import useMousePosition from "../../hooks/useMousePosition";

import cls from "./Layout.module.scss";
import { gsap } from "gsap";

const Cursor = (): ReactElement => {
  const { x, y, hasAttr, cursorRef } = useMousePosition();
  const main = useRef(null);

  return (
    <div
      data-selector="cursor"
      className={cls.cursor}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
      ref={cursorRef}
    >
      {hasAttr === "case" && <div className={cls.cursor_text}> view case</div>}
    </div>
  );
};

export default Cursor;
