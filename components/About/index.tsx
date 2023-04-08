import Hero from "./Hero";
import Statement from "./Statement";
import Values from "./Values";
import Products from "../Home/Products";

import c from "./About.module.scss";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div className={c.about}>
      <Hero />
      <Statement />
      <Values />
      <Products />
      <OurTeam />
    </div>
  );
};

export default About;
