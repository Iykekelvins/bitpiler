import Hero from "./Hero";
import Intro from "./Intro";

import c from "./Home.module.scss";

const Home = () => {
  return (
    <div className={c.home}>
      <Hero />
      <Intro />
    </div>
  );
};

export default Home;
