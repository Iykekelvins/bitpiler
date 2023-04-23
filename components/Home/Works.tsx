import { works } from "@/utils";

import Image from "next/image";
import Buttons from "@/shared/Buttons";
import Link from "@/shared/Link";

import c from "./Home.module.scss";

const Works = () => {
  return (
    <section className={c.home_works}>
      <div className={c.home_works_intro} data-animation="text">
        <div className={c.home_works_intro_left}>
          <h4 data-splitting="chars">FEATURED PROJECTS</h4>
          <h1 data-splitting="words">Our works speak for itself</h1>
        </div>
        <div className={c.home_works_intro_right}>
          <p data-splitting="words">
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs. And then we
            will implement them.
          </p>
        </div>
      </div>
      <div className={c.home_works_list}>
        {works.map((work, i) => (
          <Link
            key={work.title}
            className=""
            linkText="Case Study"
            href={`/works/case/${work.title
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <div className={c.home_works_list_item}>
              <Image
                src={work.img}
                width={480}
                height={723}
                alt="work image"
                data-selector="case"
                data-bg={work.bg}
              />
              <p data-splitting="words" data-animation="text">
                <span className={c.title}>{work.title}</span> - {work.info}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className={c.home_works_btn}>
        <Link href="/works" className="" linkText="our works">
          <Buttons title="View All Projects" blackText />
        </Link>
      </div>
    </section>
  );
};

export default Works;
