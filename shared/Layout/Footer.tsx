import { desktopLinks1, desktopLinks2 } from "@/utils";
import { gsap } from "gsap";

import c from "./Layout.module.scss";

const Footer = () => {
  const hoverTl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.1, ease: "Expo.inOut" },
  });

  const linkHover = (e) => {
    const chars = e.currentTarget.querySelectorAll(".char");
    hoverTl.to(chars, {
      yPercent: -100,
      stagger: 0.01,
    });
    hoverTl.play();
  };

  const linkHoverOut = (e) => {
    const chars = e.currentTarget.querySelectorAll(".char");
    hoverTl.to(chars, {
      yPercent: 0,
      stagger: -0.01,
    });
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
          <a href="">info@bitpiler.io</a>
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
