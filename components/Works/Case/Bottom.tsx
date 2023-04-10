import Image from "next/image";

import c from "../Works.module.scss";

const Bottom = () => {
  return (
    <section className={c.case_bottom}>
      <div className={c.case_bottom_intro}>
        <h1>Cryptocurrency buying, selling and trading</h1>
        <Image
          src="/assets/images/case-cover-2.png"
          width={1001}
          height={528}
          alt="project cover image"
        />
      </div>
      <div className={c.case_bottom_about}>
        <div className={c.case_bottom_about_left}>
          <h4>WHAT WE DO</h4>
          <h1>Winning Amazing is a Close to None Opportunity</h1>
        </div>
        <div className={c.case_bottom_about_right}>
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
    </section>
  );
};

export default Bottom;
