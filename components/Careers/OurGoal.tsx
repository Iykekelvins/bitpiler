import Image from "next/image";

import c from "./Careers.module.scss";

const OurGoal = () => {
  return (
    <section className={c.careers_goal}>
      <div className={c.careers_goal_intro}>
        <div>
          <h4>WHAT WE DO</h4>
          <h1>Our Goal</h1>
        </div>
        <div>
          <p>
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs. And then we
            will implement them. Our team consists of over 30 design and
            development experts who work with our clients to scale their
            businesses to from 10 to 100 mln by building digital products.
            We&apos;ve helped multiple companies across various industries
            achieve their goals.
          </p>
        </div>
      </div>
      <div className={c.careers_goal_imgs}>
        <Image
          src="/assets/images/careers-img-1.png"
          width={480}
          height={701}
          alt="picture of a guy taking notes"
        />
        <Image
          src="/assets/images/careers-img-2.png"
          width={480}
          height={701}
          alt="picture of a lady holding a book"
        />
      </div>
    </section>
  );
};

export default OurGoal;
