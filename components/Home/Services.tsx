import { services } from "@/utils";
import { gsap } from "gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { animateGroup } from "@/animations";
import { useEffect } from "react";

import Image from "next/image";

import c from "./Home.module.scss";

const Services = () => {
  const isTablet = useMediaQuery("(max-width: 820px)");

  const hoverItem = (e) => {
    const words = e.currentTarget.querySelectorAll("p .word");
    const img = e.currentTarget.querySelector("img");
    const title = e.currentTarget.querySelector("h3");
    const paragraph = e.currentTarget.querySelector("p");

    const itemTl = gsap.timeline({
      defaults: { ease: "power4.in", duration: 0.1 },
    });

    if (!isTablet) {
      itemTl
        .to(
          img,

          {
            x: "0%",
          }
        )
        .to(title, {
          y: "0px",
        })
        .to(paragraph, {
          visibility: "visible",
          delay: 0.15,
        })
        .fromTo(
          words,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.01,
          }
        );
      itemTl.play();
    }
  };

  const hoverLeaveItem = (e) => {
    const words = e.currentTarget.querySelectorAll("p .word");
    const img = e.currentTarget.querySelector("img");
    const title = e.currentTarget.querySelector("h3");
    const paragraph = e.currentTarget.querySelector("p");

    const itemTl = gsap.timeline({
      defaults: { ease: "power4.in", duration: 0.01 },
    });
    if (!isTablet) {
      itemTl
        .to(words, {
          yPercent: 100,
          opacity: 0,
          // delay: 0.15,
          stagger: {
            from: "end",
            each: 0.01,
          },
        })
        .to(paragraph, {
          visibility: "hidden",
        })
        .to(title, {
          y: "160px",
          delay: 0.15,
        })
        .to(img, {
          // delay: 0.35,
          x: "100%",
        });
      itemTl.play();
    }
  };

  // useEffect(() => {
  //   animateGroup('[data-animation="text"]');
  //   // if (!isTablet) {
  //   //   console.log(true);
  //   // }
  //   if (window.screenX >= 820) {
  //     console.log(true);

  //     gsap.utils.toArray(".services-item").forEach((e: HTMLLIElement) => {
  //       const img = e.querySelector("img");
  //       gsap.to(img, {
  //         x: 0,
  //         duration: 0.01,
  //         scrollTrigger: {
  //           trigger: img,
  //           // markers: true,
  //           start: "top bottom-=50",
  //         },
  //       });
  //     });
  //   } else {
  //     console.log(false);
  //   }
  //   // }
  // }, []);

  return (
    <section className={c.home_services}>
      <ul>
        {services.map((item) => (
          <li
            key={item.title}
            className={`${c.home_services_item} services-item`}
            onMouseEnter={(e) => hoverItem(e)}
            onMouseLeave={(e) => hoverLeaveItem(e)}
            data-animation="text"
          >
            <Image
              src="/assets/images/product.png"
              width={360}
              height={272}
              alt={`${item.title} desc image`}
            />
            <div
              className={c.home_services_item_footer}
              data-selector="home-services-item"
            >
              <h3 data-splitting="words">{item.title}</h3>
              <p data-splitting="words">{item.info}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
