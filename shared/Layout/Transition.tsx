import { useContext, useState } from "react";

import AppContext from "@/context/generalContext";

import c from "./Layout.module.scss";

const Transition = () => {
  const ctx = useContext<any>(AppContext);

  return (
    <div className={c.transition} data-selector="transition">
      <h1 className="transition-chars">
        <span>{ctx.link}</span>
      </h1>
    </div>
  );
};

export default Transition;
