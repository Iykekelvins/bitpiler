import { closeMenu, linkHover, linkHoverOut, openMenu } from "@/animations";
import { useRouter } from "next/router";
import { links } from "@/utils";
import Link from "../Link";
import Image from "next/image";
import Buttons from "../Buttons";

import c from "./Layout.module.scss";

const Navbar = () => {
  const router = useRouter();
  const isDarkBg =
    router.pathname === "/" || router.pathname === "/coming-soon";

  const toggleMenu = () => {
    const btn = document.querySelector("nav button");

    if (btn?.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <nav
        className={`${c.navbar} ${
          isDarkBg && `${c.navbar_dark_bg} navbar-dark`
        } navbar`}
        data-selector="navbar"
      >
        <Link href="/" className="">
          <Image
            src={
              isDarkBg ? "/assets/svgs/logo.svg" : "/assets/svgs/logo-dark.svg"
            }
            alt="bitpiler logo"
            width={115}
            height={35}
          />
        </Link>
        <ul>
          {links.map((link) => (
            <li
              key={link.title}
              data-splitting="chars"
              onMouseEnter={(e) => linkHover(e)}
              onMouseLeave={(e) => linkHoverOut(e)}
              className="nav-link"
            >
              <Link href={link.url} className="parent-link">
                {link.title}
              </Link>
              <Link href={link.url} className="child-link">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="" linkText="Contact Us">
          <Buttons title="Get Started" arrow started />
        </Link>
      </nav>
      <button
        className={`${c.navbar_toggle} ${isDarkBg ? c.dark_toggle : ""}`}
        onClick={toggleMenu}
        data-selector="toggle"
      >
        <span className={`${c.navbar_toggle_line} line-1`}></span>
        <span className={`${c.navbar_toggle_line} line-2`}></span>
        <span className={`${c.navbar_toggle_line} line-3`}></span>
      </button>
    </>
  );
};

export default Navbar;
