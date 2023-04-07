import { useRouter } from "next/router";
import { links } from "@/utils/links";
import Link from "next/link";
import Image from "next/image";

import c from "./Layout.module.scss";
import Buttons from "../Buttons";

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
      <Buttons title="Get Started" arrow started />
    </nav>
  );
};

export default Navbar;
