import { gsap } from "gsap";
import { desktopLinks1, desktopLinks2 } from "@/utils";
import { linkHover, linkHoverOut } from "@/animations";

import c from "./Layout.module.scss";

const Footer = () => {
  const emailLinkHover = (e) => {
    const span = e.currentTarget.querySelector("span");

    gsap.fromTo(
      span,
      { x: "-100%" },
      {
        x: 0,
        duration: 0.01,
      }
    );
  };

  const emailLinkHoverOut = (e) => {
    const span = e.currentTarget.querySelector("span");

    // gsap
    //   .timeline()
    //   .to(span, {
    //     x: "100%",
    //     duration: 0.01,
    //   })
    //   .to(span, {
    //     y: 100,
    //     x: "-100%",
    //     delay: 0.02,
    //   });
  };

  return (
    <footer className={c.footer}>
      <div className={c.footer_top}>
        <h1>Have an Idea?</h1>
        <a href="" rel="noreferrer">
          <h1>Tell us about it?</h1>
        </a>
      </div>
      <div className={c.footer_bottom}>
        <div className={c.footer_bottom_left}>
          <a
            href=""
            onMouseEnter={(e) => emailLinkHover(e)}
            onMouseLeave={(e) => emailLinkHoverOut(e)}
          >
            info@bitpiler.io
            <span></span>
          </a>
          <p>
            4517 Washington Ave. <br /> Manchester, Kentucky 39495
          </p>
          <a href="">Privacy Policy</a>
        </div>
        <div className={c.footer_bottom_right}>
          <ul className={c.footer_bottom_right_l}>
            {desktopLinks1.map((link) => (
              <li
                key={link.title}
                data-splitting="chars"
                onMouseEnter={(e) => linkHover(e)}
                onMouseLeave={(e) => linkHoverOut(e)}
                className="nav-link"
              >
                <a href={link.utl} className="parent-link">
                  {link.title}
                </a>
                <a href={link.utl} className="child-link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className={c.footer_bottom_right_r}>
            {desktopLinks2.map((link) => (
              <li
                key={link.title}
                data-splitting="chars"
                onMouseEnter={(e) => linkHover(e)}
                onMouseLeave={(e) => linkHoverOut(e)}
                className="nav-link"
              >
                <a href={link.utl} className="parent-link">
                  {link.title}
                </a>
                <a href={link.utl} className="child-link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
