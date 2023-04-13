import { useRouter } from "next/router";

import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const isComingSoon = router.pathname === "/coming-soon";

  return (
    <main>
      <Navbar />
      {children}
      {!isComingSoon && <Footer />}
    </main>
  );
};

export default Layout;
