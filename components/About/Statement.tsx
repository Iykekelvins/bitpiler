import { useEffect } from "react";
import { animateGroup } from "@/animations";

import c from "./About.module.scss";

const Statement = () => {
  useEffect(() => {
    animateGroup('[data-animation="text"]');
  }, []);

  return (
    <div className={c.about_statement}>
      <div className={c.about_statement_grid} data-animation="text">
        <div>
          <h4 className="white" data-splitting="chars">
            WHAT WE DO
          </h4>
          <h2 data-splitting="words">Our Vision Statement</h2>
        </div>
        <div>
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
      <div className={c.about_statement_grid} data-animation="text">
        <div>
          <h4 className="white" data-splitting="chars">
            WHAT WE DO
          </h4>
          <h2 data-splitting="words">Our Mission Statement</h2>
        </div>
        <div>
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
    </div>
  );
};

export default Statement;
