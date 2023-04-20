import { useEffect } from "react";
import { animateText } from "@/animations";

import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Works from "./Works";
import Products from "./Products";
import Testimonials from "./Testimonials";

import c from "./Home.module.scss";

const Home = () => {
  // const [doc, setDoc] = useState(null);
  useEffect(() => {
    animateText("[data-selector='home-hero'] .word");
    animateText("[data-selector='home-intro'] h4 .char", 0.025);
    animateText("[data-selector='home-intro'] .word");
    animateText("[data-selector='works-intro'] h4 .char", 0.025);
    animateText("[data-selector='works-intro'] .word");
    animateText("[data-selector='work-0'] .word");
    animateText("[data-selector='work-1'] .word");
    animateText("[data-selector='home-products-intro'] h4 .char", 0.025);
    animateText("[data-selector='home-products-intro'] .word");
    animateText("[data-selector='home-products-item'] .word");
    animateText("[data-selector='home-testimonials'] h4 .char", 0.025);
    animateText("[data-selector='home-testimonials'] .word");
  }, []);

  return (
    <div className={c.home} data-barba="container">
      <Hero />
      <Intro />
      <Services />
      <Works />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;
