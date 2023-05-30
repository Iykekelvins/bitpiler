import { useEffect, useState } from "react";
import { animatePositions } from "@/animations";
import { positions } from "@/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import Image from "next/image";
import Buttons from "@/shared/Buttons";

import c from "./Careers.module.scss";

const Positions = () => {
  const [idx, setIdx] = useState<any>(null);
  const isMobile = useMediaQuery("(max-width: 480px)");

  useEffect(() => {
    animatePositions();
  }, []);

  return (
    <section className={c.careers_positions} id="positions">
      <div className={c.careers_positions_intro} data-animation="text">
        <h4 data-splitting="chars">IN ADDITION TO COMPETITIVE SALARY</h4>
        <h1 data-splitting="words">Open Position</h1>
      </div>
      <ul className={c.careers_positions_list}>
        {positions.map((position, i) => (
          <div key={position.title}>
            {isMobile ? (
              <li
                className={`${c.careers_positions_list_item} position`}
                data-animation="text"
                data-selector="position"
              >
                <header onClick={() => (idx === i ? setIdx(null) : setIdx(i))}>
                  <div className={c.careers_positions_list_item_left}>
                    <Image
                      src={position.icon}
                      height={80}
                      width={80}
                      alt="icon"
                    />
                    <div>
                      <h3>{position.title}</h3>
                      <h5>
                        {position.location} <span className={c.circle}></span>{" "}
                        {position.role}
                      </h5>
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={idx === i ? c.spin : ""}
                  >
                    <path
                      d="M8 8L0.5 0.5H15.5L8 8Z"
                      fill={idx === i ? "rgba(0, 15, 48, 0.5)" : " #00D161"}
                    />
                  </svg>
                </header>
                <div className={`${c.info} ${idx === i ? c.show : ""}`}>
                  <div className={c.info_child}>
                    <p>
                      {position.info}
                      <br />
                      <br />
                      We&apos;ll study your product and give you solutions that
                      will connect your objectives with your users&apos; needs.
                      And then we will implement them. Our team consists of over
                      30 design and development experts who work.
                    </p>
                    <Buttons title="Apply Now" arrow started />
                  </div>
                </div>
              </li>
            ) : (
              <li
                key={position.title}
                className={`${c.careers_positions_list_item} position`}
                data-animation="text"
              >
                <div className={c.careers_positions_list_item_left}>
                  <Image
                    src={position.icon}
                    height={80}
                    width={80}
                    alt="icon"
                  />
                  <div className={c.careers_positions_list_item_right}>
                    <header
                      onClick={() => (idx === i ? setIdx(null) : setIdx(i))}
                    >
                      <h3>{position.title}</h3>
                      <h5>
                        {position.location} <span className={c.circle}></span>{" "}
                        {position.role}
                      </h5>
                      <svg
                        width="16"
                        height="8"
                        viewBox="0 0 16 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={idx === i ? c.spin : ""}
                      >
                        <path
                          d="M8 8L0.5 0.5H15.5L8 8Z"
                          fill={idx === i ? "rgba(0, 15, 48, 0.5)" : " #00D161"}
                        />
                      </svg>
                    </header>
                    <div className={`${c.info} ${idx === i ? c.show : ""}`}>
                      <div className={c.info_child}>
                        <p>
                          {position.info}
                          <br />
                          <br />
                          We&apos;ll study your product and give you solutions
                          that will connect your objectives with your
                          users&apos; needs. And then we will implement them.
                          Our team consists of over 30 design and development
                          experts who work.
                        </p>
                        <Buttons title="Apply Now" arrow started />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Positions;
