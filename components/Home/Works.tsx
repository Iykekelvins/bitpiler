import { works } from "@/utils";
import c from "./Home.module.scss";
import Image from "next/image";
import Buttons from "@/shared/Buttons";
import Link from "next/link";

const Works = () => {
  return (
    <section className={c.home_works}>
      <div className={c.home_works_intro}>
        <div className={c.home_works_intro_left}>
          <h4>FEATURED PROJECTS</h4>
          <h1>Our works speak for itself</h1>
        </div>
        <div className={c.home_works_intro_right}>
          <p>
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs. And then we
            will implement them.
          </p>
        </div>
      </div>
      <div className={c.home_works_list}>
        {works.map((work) => (
          <Link
            key={work.title}
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
              <p>
                <span>{work.title}</span> - {work.info}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className={c.home_works_btn}>
        <Link href="/works">
          <Buttons title="View All Projects" blackText />
        </Link>
      </div>
    </section>
  );
};

export default Works;
