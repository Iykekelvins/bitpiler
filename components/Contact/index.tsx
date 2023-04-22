import { useEffect, useState } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Buttons from "@/shared/Buttons";
import Splitting from "splitting";

import c from "./Contact.module.scss";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    number: "",
    message: "",
  });

  const handleState = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    const isSession = sessionStorage.getItem("isSession");
    animateGroup('[data-animation="text"]');
    Splitting();
    setTimeout(
      () => {
        gsap
          .timeline({ defaults: { ease: "power4.in" } })
          .to(
            [
              "[data-selector='hero'] .word",
              '[data-selector="home-btns"] button',
            ],
            {
              y: 0,
              opacity: 1,
              stagger: 0.01,
            }
          )
          .to('[data-selector="contact-links"] a', {
            y: 0,
            stagger: 0.05,
          })
          .fromTo(
            "[data-selector='input']",
            {
              transform: "translateY(200px) rotate(-15deg)",
              // rotate: "-15deg",
            },
            {
              transform: "translateY(0) rotate(0deg)",
              stagger: 0.05,
            }
          );
      },
      isSession ? 1200 : 0
    );
  }, []);

  return (
    <div className={c.contact}>
      <div className={c.contact_form}>
        <div className={c.contact_form_left} data-selector="hero">
          <h4 data-splitting="chars">CONTACT US</h4>
          <h1 data-splitting="words">
            Let&apos;s Create <br /> Success Together
          </h1>
          <p data-splitting="words">
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs
          </p>
          <div
            className={c.contact_form_left_links}
            data-selector="contact-links"
          >
            <a href="mailto: info@bitpiler.io">info@bitpiler.io</a>
            <a href="">+2348163399714</a>
          </div>
        </div>
        <div className={c.contact_form_right}>
          <div
            className={`${c.contact_form_right_input} ${
              state.name.trim().length > 0 && c.active
            }`}
            data-selector="input"
          >
            <span>Full Name</span>
            <input
              type="text"
              value={state.name}
              name="name"
              onChange={handleState}
            />
          </div>
          <div
            className={`${c.contact_form_right_input} ${
              state.address.trim().length > 0 && c.active
            }`}
          >
            <span>Your Email Address</span>
            <input
              type="text"
              value={state.address}
              name="address"
              onChange={handleState}
            />
          </div>
          <div
            className={`${c.contact_form_right_input} ${
              state.number.trim().length > 0 && c.active
            }`}
          >
            <span>Your Phone Number</span>
            <input
              type="text"
              value={state.number}
              name="number"
              onChange={handleState}
            />
          </div>
          <div
            className={`${c.contact_form_right_textarea} ${
              state.message.trim().length > 0 && c.active
            }`}
          >
            <h5>Your Message</h5>
            <textarea
              name="message"
              value={state.message}
              onChange={handleState}
            />
          </div>
          <Buttons title="Shoot a Message" started arrow />
        </div>
      </div>
    </div>
  );
};

export default Contact;
