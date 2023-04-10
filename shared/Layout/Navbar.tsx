import { useRouter } from "next/router";
import { links } from "@/utils";

import Link from "next/link";
import Image from "next/image";
import Buttons from "../Buttons";

import c from "./Layout.module.scss";

const Navbar = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <nav className={`${c.navbar} ${isHome && c.navbar_home}`}>
      <Link href="/">
        <Image
          src={isHome ? "/assets/svgs/logo.svg" : "/assets/svgs/logo-dark.svg"}
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
    </nav>
  );
};

export default Navbar;
