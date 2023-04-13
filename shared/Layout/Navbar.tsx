import { useRouter } from "next/router";
import { links } from "@/utils";

import Link from "next/link";
import Image from "next/image";
import Buttons from "../Buttons";

import c from "./Layout.module.scss";

const Navbar = () => {
  const router = useRouter();
  const isDarkBg =
    router.pathname === "/" || router.pathname === "/coming-soon";

  return (
    <nav className={`${c.navbar} ${isDarkBg && c.navbar_dark_bg}`}>
      <Link href="/">
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
          <li key={link.title}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/contact">
        <Buttons title="Get Started" arrow started />
      </Link>
      <button className={c.navbar_toggle}>
        <svg
          width="30"
          height="22"
          viewBox="0 0 30 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.50002 0.583374H12.9167C13.4692 0.583374 13.9991 0.802868 14.3898 1.19357C14.7805 1.58427 15 2.11417 15 2.66671C15 3.21924 14.7805 3.74915 14.3898 4.13985C13.9991 4.53055 13.4692 4.75004 12.9167 4.75004H2.50002C1.94749 4.75004 1.41758 4.53055 1.02688 4.13985C0.636181 3.74915 0.416687 3.21924 0.416687 2.66671C0.416687 2.11417 0.636181 1.58427 1.02688 1.19357C1.41758 0.802868 1.94749 0.583374 2.50002 0.583374ZM17.0834 17.25H27.5C28.0526 17.25 28.5825 17.4695 28.9732 17.8602C29.3639 18.2509 29.5834 18.7808 29.5834 19.3334C29.5834 19.8859 29.3639 20.4158 28.9732 20.8065C28.5825 21.1972 28.0526 21.4167 27.5 21.4167H17.0834C16.5308 21.4167 16.0009 21.1972 15.6102 20.8065C15.2195 20.4158 15 19.8859 15 19.3334C15 18.7808 15.2195 18.2509 15.6102 17.8602C16.0009 17.4695 16.5308 17.25 17.0834 17.25ZM2.50002 8.91671H27.5C28.0526 8.91671 28.5825 9.1362 28.9732 9.5269C29.3639 9.9176 29.5834 10.4475 29.5834 11C29.5834 11.5526 29.3639 12.0825 28.9732 12.4732C28.5825 12.8639 28.0526 13.0834 27.5 13.0834H2.50002C1.94749 13.0834 1.41758 12.8639 1.02688 12.4732C0.636181 12.0825 0.416687 11.5526 0.416687 11C0.416687 10.4475 0.636181 9.9176 1.02688 9.5269C1.41758 9.1362 1.94749 8.91671 2.50002 8.91671Z"
            fill="white"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
