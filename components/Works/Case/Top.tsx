import Image from "next/image";
import c from "../Works.module.scss";

const Top = () => {
  return (
    <section className={c.case_top} data-selector="hero-case">
      <div className={c.case_top_intro}>
        <h4 data-splitting="chars">EDUSPONSOR</h4>
        <h1 data-splitting="words">
          Cryptocurrency buying, selling and trading made easy.
        </h1>
      </div>
      <div className={c.case_top_info}>
        <div className={c.case_top_info_entry}>
          <svg
            width="1"
            height="50"
            viewBox="0 0 1 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1" height="50" fill="#00D161" />
          </svg>
          <div>
            <h5 data-splitting="chars">Platforms</h5>
            <p data-splitting="words">Mobile App, Branding, Marketing</p>
          </div>
        </div>
        <div className={c.case_top_info_entry}>
          <svg
            width="1"
            height="50"
            viewBox="0 0 1 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1" height="50" fill="#00D161" />
          </svg>
          <div>
            <h5 data-splitting="chars">Deliverables</h5>
            <p data-splitting="words">Mobile App, Branding, Marketing</p>
          </div>
        </div>
      </div>
      <div className={c.case_top_cover}>
        <Image
          src="/assets/images/case-cover.png"
          width={1440}
          height={656}
          alt="project cover image"
        />
      </div>
    </section>
  );
};

export default Top;
