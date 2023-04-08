import { testimonials } from "@/utils";
import c from "./Home.module.scss";

const Testimonials = () => {
  return (
    <section className={c.home_testimonials}>
      <div className={c.home_testimonials_intro}>
        <h4>TESTIMONIALS</h4>
        <h1>
          What Our <br /> Clients Say
        </h1>
      </div>
      <ul>
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
