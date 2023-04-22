import { useState } from "react";
import { positions } from "@/utils";
import Image from "next/image";

import c from "./Careers.module.scss";

const Positions = () => {
  const [idx, setIdx] = useState<any>(null);

  return (
    <section className={c.careers_positions}>
      <div className={c.careers_positions_intro} data-animation="text">
        <h4 data-splitting="chars">IN ADDITION TO COMPETITIVE SALARY</h4>
        <h1 data-splitting="words">Open Position</h1>
      </div>
      <div className={c.careers_positions_list}>
        {positions.map((position, i) => (
          <div
            key={position.title}
            className={c.careers_positions_list_item}
            data-animation="text"
          >
            <header onClick={() => setIdx(i)}>
              <div className={c.careers_positions_list_item_left}>
                <Image src={position.icon} height={80} width={80} alt="icon" />
                <div>
                  <h3 data-splitting="words">{position.title}</h3>
                  <h5 data-splitting="words">
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
              >
                <path d="M8 8L0.5 0.5H15.5L8 8Z" fill="#00D161" />
              </svg>
            </header>
            <div className={c.info}>{idx === i && <p>{position.info}</p>}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Positions;
