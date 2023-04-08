import Benefits from "./Benefits";
import c from "./Careers.module.scss";
import Hero from "./Hero";
import OurGoal from "./OurGoal";

const Careers = () => {
  return (
    <div className={c.careers}>
      <Hero />
      <OurGoal />
      <Benefits />
    </div>
  );
};

export default Careers;
