import Hero from "./Hero";
import Statement from "./Statement";
import Values from "./Values";
import Products from "../Home/Products";

import c from "./About.module.scss";

const About = () => {
  return (
    <div className={c.about}>
      <Hero />
      <Statement />
      <Values />
      <Products />
    </div>
  );
};

export default About;
