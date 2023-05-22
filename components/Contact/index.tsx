import { useEffect, useState } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Buttons from "@/shared/Buttons";
import Splitting from "splitting";
import Head from "next/head";

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
    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isSession ? 1.85 : 0.5 },
      })
      .to(["[data-selector='hero'] .word"], {
        y: 0,
        opacity: 1,
        stagger: 0.01,
      })
      .to(
        '[data-selector="contact-links"] a',
        {
          y: 0,
          stagger: 0.05,
        },
        `${isSession ? "-=2.5" : "-=1"}`
      )
      .to(
        "[data-selector='input']",
        {
          opacity: 1,
        },
        `${isSession ? "-=2.5" : "-=1"}`
      );
  }, []);

  return (
    <div className={c.contact}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Contact Us</title>
      </Head>
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
            <a href="mailto:info@bitpiler.io">info@bitpiler.io</a>
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
            data-selector="input"
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
            data-selector="input"
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
            data-selector="input"
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
