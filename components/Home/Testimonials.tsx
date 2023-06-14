import { useEffect } from "react";
import { testimonials } from "@/utils";

import c from "./Home.module.scss";

const Testimonials = () => {
  return (
    <section className={c.home_testimonials} data-animation="text">
      <div className={c.home_testimonials_intro}>
        <h4 data-splitting="chars">TESTIMONIALS</h4>
        <h1 data-splitting="words">
          What Our <br /> Clients Say
        </h1>
      </div>
      <ul data-selector="testimonials">
        {testimonials.map((item, i) => (
          <li key={i}>
            <p>{item.info}</p>
            <h4>
              <span>{item.user}</span> - {item.role}
            </h4>
          </li>
        ))}
        {testimonials.map((item, i) => (
          <li key={i}>
            <p>{item.info}</p>
            <h4>
              <span>{item.user}</span> - {item.role}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
