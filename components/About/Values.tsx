import { values } from "@/utils";
import c from "./About.module.scss";
import Image from "next/image";

const Values = () => {
  return (
    <section className={c.about_values}>
      <div className={c.about_values_intro}>
        <h4>WHAT WE STAND FOR</h4>
        <h1>Our Values</h1>
      </div>
      <div className={c.about_values_grid}>
        {values.map((val) => (
          <div key={val.title}>
            <Image src={val.logo} height={40} width={40} alt="icon" />
            <h3>{val.title}</h3>
            <p>{val.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
