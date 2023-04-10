import Benefits from "./Benefits";
import Hero from "./Hero";
import OurGoal from "./OurGoal";
import Positions from "./Positions";

import Splitting from "splitting";

import c from "./Careers.module.scss";

const Careers = () => {
  return (
    <div className={c.careers}>
      <Hero />
      <OurGoal />
      <Benefits />
      <Positions />
    </div>
  );
};

export default Careers;
