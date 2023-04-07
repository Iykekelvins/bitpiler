import Navbar from "@/shared/Layout/Navbar";
import Footer from "@/shared/Layout/Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
