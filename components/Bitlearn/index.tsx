import Hero from "./Hero";
import Info from "./Info";
import InfoCards from "./InfoCards";

import c from "./Bitlearn.module.scss";

const Bitlearn = () => {
  return (
    <div className={c.bitlearn}>
      <Hero />
      <Info />
      <InfoCards />
    </div>
  );
};

export default Bitlearn;
