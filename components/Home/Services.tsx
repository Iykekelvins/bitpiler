import { services } from "@/utils";
import Image from "next/image";

import c from "./Home.module.scss";

const Services = () => {
  return (
    <section className={c.home_services}>
      {services.map((item) => (
        <div key={item.title} className={c.home_services_item}>
          <Image
            src="/assets/images/product.png"
            width={360}
            height={392}
            alt={`${item.title} desc image`}
          />
          <div className={c.home_services_item_footer}>
            <h3>{item.title}</h3>
            <p data-splitting="lines">{item.info}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
