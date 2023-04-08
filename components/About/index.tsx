import Hero from "./Hero";
import Statement from "./Statement";

import c from "./About.module.scss";
import Products from "../Home/Products";

const About = () => {
  return (
    <div className={c.about}>
      <Hero />
      <Statement />
      <Products />
    </div>
  );
};

export default About;
