import { benefits } from "@/utils";
import c from "./Careers.module.scss";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className={c.careers_benefits}>
      <div className={c.careers_benefits_intro}>
        <h4>IN ADDITION TO COMPETITIVE SALARY</h4>
        <h1>Work Benefits</h1>
      </div>
      <div className={c.careers_benefits_list}>
        {benefits.map((benefit) => (
          <div key={benefit.title}>
            <Image src={benefit.icon} height={40} width={40} alt="icon" />
            <h3>{benefit.title}</h3>
            <p>{benefit.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
