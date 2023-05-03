import Image from "next/image";

import c from "../Works.module.scss";

const Center = () => {
  return (
    <section className={c.case_center}>
      <div className={c.case_center_entry} data-animation="text">
        <div className={c.case_center_entry_left}>
          <h4 data-splitting="chars">WHAT WE DO</h4>
          <h1 data-splitting="words">
            Understanding <br /> the Challenge
          </h1>
        </div>
        <div className={c.case_center_entry_right} data-animation="text">
          <p data-splitting="words">
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
      <div className={c.case_center_entry}>
        <div className={c.case_center_entry_left} data-animation="text">
          <h4 data-splitting="chars">WHAT WE DO</h4>
          <h1 data-splitting="words">
            Project&apos;s <br />
            Objectives
          </h1>
        </div>
        <div className={c.case_center_entry_right} data-animation="text">
          <p data-splitting="words">
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
      <div className={c.case_center_imgs}>
        <div className={c.case_center_imgs_entry} data-animation="text">
          <Image
            src="/assets/images/case-left.png"
            height={723}
            width={480}
            alt="project image"
          />
          <p data-splitting="words">
            Cryptocurrency buying, selling and trading made easy.
          </p>
        </div>
        <div className={c.case_center_imgs_entry} data-animation="text">
          <Image
            src="/assets/images/case-right.png"
            height={723}
            width={480}
            alt="project image"
          />
          <p data-splitting="words">
            Cryptocurrency buying, selling and trading made easy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Center;
