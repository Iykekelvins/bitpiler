import { benefits } from "@/utils";
import Image from "next/image";

import c from "./Careers.module.scss";

const Benefits = () => {
  return (
    <section className={c.careers_benefits}>
      <div className={c.careers_benefits_intro} data-animation="text">
        <h4 data-splitting="chars">IN ADDITION TO COMPETITIVE SALARY</h4>
        <h1 data-splitting="words">Work Benefits</h1>
      </div>
      <div className={c.careers_benefits_list}>
        {benefits.map((benefit) => (
          <div key={benefit.title} data-animation="text">
            <Image src={benefit.icon} height={40} width={40} alt="icon" />
            <h3 data-splitting="words">{benefit.title}</h3>
            <p data-splitting="words"> {benefit.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
