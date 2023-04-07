import Hero from "./Hero";
import c from "./Home.module.scss";

const Home = () => {
  return (
    <div className={c.home}>
      <Hero />
    </div>
  );
};

export default Home;
