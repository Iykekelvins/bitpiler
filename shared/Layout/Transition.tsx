import { useRouter } from "next/router";
import { useContext, useState } from "react";
import GlobalContext from "@/store/context";

import c from "./Layout.module.scss";

const Transition = () => {
  const ctx = useContext(GlobalContext);
  const [string, setString] = useState(ctx.link);

  // for (let i = 0; i < string.length; i++) {
  //   console.log(string[i]);
  // }

  return (
    <div className={c.transition} data-selector="transition">
      <div className={c.transition_left} data-selector="transition-left"></div>
      <div
        className={c.transition_right}
        data-selector="transition-right"
      ></div>
      <h1 data-splitting="chars" className="transition-chars">
        {ctx.link}
      </h1>
    </div>
  );
};

export default Transition;
