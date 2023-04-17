import { useRef, useEffect, ReactElement } from "react";
import useMousePosition from "../../hooks/useMousePosition";

import cls from "./Layout.module.scss";
import { gsap } from "gsap";

const Cursor = (): ReactElement => {
  const { x, y, hasAttr } = useMousePosition();
  const main = useRef(null);

  return (
    <div
      data-selector="cursor"
      className={cls.cursor}
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      {hasAttr === "case" && <div className={cls.cursor_text}> view case</div>}
    </div>
  );
};

export default Cursor;
