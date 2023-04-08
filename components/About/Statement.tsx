import c from "./About.module.scss";

const Statement = () => {
  return (
    <div className={c.about_statement}>
      <div className={c.about_statement_grid}>
        <div>
          <h4 className="white">WHAT WE DO</h4>
          <h2>Our Vision Statement</h2>
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
      <div className={c.about_statement_grid}>
        <div>
          <h4 className="white">WHAT WE DO</h4>
          <h2>Our Mission Statement</h2>
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
    </div>
  );
};

export default Statement;
