import { useState } from "react";
import c from "./Contact.module.scss";
import Buttons from "@/shared/Buttons";

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

  return (
    <div className={c.contact}>
      <div className={c.contact_form}>
        <div className={c.contact_form_left}>
          <h4>CONTACT US</h4>
          <h1>
            Let&apos;s Create <br /> Success Together
          </h1>
          <p>
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs
          </p>
          <div>
            <a href="mailto: info@bitpiler.io">info@bitpiler.io</a>
            <a href="">+2348163399714</a>
          </div>
        </div>
        <div className={c.contact_form_right}>
          <div
            className={`${c.contact_form_right_input} ${
              state.name.trim().length > 0 && c.active
            }`}
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
