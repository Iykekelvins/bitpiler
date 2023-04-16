import c from "./Layout.module.scss";

const Transition = () => {
  return (
    <div className={c.transition} data-selector="transition">
      <div className={c.transition_left} data-selector="transition-child"></div>
      <div
        className={c.transition_right}
        data-selector="transition-child"
      ></div>
      <h1 data-splitting="chars" className="transition-chars">
        BITPILER
      </h1>
    </div>
  );
};

export default Transition;
