import { useEffect, useState } from "react";
import { animateGroup } from "@/animations";
import { gsap } from "gsap";

import Buttons from "@/shared/Buttons";
import Splitting from "splitting";
import Head from "next/head";

import c from "./Contact.module.scss";
import Image from "next/image";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    number: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleState = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    const isPreloader = sessionStorage.getItem("preloader");

    animateGroup('[data-animation="text"]');
    Splitting();

    gsap
      .timeline({
        defaults: { ease: "Expo.inOut", delay: isPreloader ? 2.65 : 1.85 },
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
        `${isPreloader ? "-=2.95" : "-=2"}`
      )
      .to(
        "[data-selector='input']",
        {
          opacity: 1,
        },
        `${isPreloader ? "-=2.95" : "-=2"}`
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
      {!success ? (
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
            <Buttons
              title="Shoot a Message"
              started
              arrow
              onClick={() => {
                window.scrollTo(0, 0);
                setSuccess(true);
              }}
            />
          </div>
        </div>
      ) : (
        <div className={c.contact_success}>
          <Image
            src="/assets/svgs/message.svg"
            alt=""
            height={144}
            width={217}
          />
          <h3>Thank You!</h3>
          <p>Thanks for contacting us! We&apos;ll contact you shortly</p>
          <div>
            <a href="mailto:info@bitpiler.io">info@bitpiler.io</a>
            <a href="">+2348163399714</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
