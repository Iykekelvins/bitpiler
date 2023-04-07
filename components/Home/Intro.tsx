import Buttons from "@/shared/Buttons";
import c from "./Home.module.scss";

const Intro = () => {
  return (
    <section className={c.home_intro}>
      <div className={c.home_intro_left}>
        <h4>WHAT WE DO</h4>
        <h1>Breakthrough ideas. Elegantly designed.</h1>
      </div>
      <div className={c.home_intro_right}>
        <p>
          We&apos;ll study your product and give you solutions that will connect
          your objectives with your users&apos; needs. And then we will
          implement them. Our team consists of over 30 design and development
          experts who work with our clients to scale their businesses to from 10
          to 100 mln by building digital products. We&apos;ve helped multiple
          companies across various industries achieve their goals.
        </p>
        <Buttons title="Meet our Team" blackText />
      </div>
    </section>
  );
};

export default Intro;
