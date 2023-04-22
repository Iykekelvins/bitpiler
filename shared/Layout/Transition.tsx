import { useRouter } from "next/router";
import c from "./Layout.module.scss";

const Transition = () => {
  const router = useRouter();

  return (
    <div className={c.transition} data-selector="transition">
      <div className={c.transition_left} data-selector="transition-left"></div>
      <div
        className={c.transition_right}
        data-selector="transition-right"
      ></div>
      <h1 data-splitting="chars" className="transition-chars">
        BITPILER
      </h1>
    </div>
  );
};

export default Transition;
