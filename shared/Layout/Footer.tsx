import { desktopLinks1, desktopLinks2 } from "@/utils/links";
import c from "./Layout.module.scss";

const Footer = () => {
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
          <div className={c.footer_bottom_right_l}>
            {desktopLinks1.map((link) => (
              <a href={link.utl} key={link.title}>
                {link.title}
              </a>
            ))}
          </div>
          <div className={c.footer_bottom_right_r}>
            {desktopLinks2.map((link) => (
              <a href={link.utl} key={link.title}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
