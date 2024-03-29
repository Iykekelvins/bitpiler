import { useEffect } from "react";
import { animateBitlearnBtns } from "@/animations";
import { cards } from "@/utils";
import Buttons from "@/shared/Buttons";
import Image from "next/image";
import Link from "@/shared/Link";

import c from "./Bitlearn.module.scss";

const InfoCards = () => {
  useEffect(() => {
    animateBitlearnBtns();
  }, []);
  return (
    <ul className={c.bitlearn_cards}>
      {cards.map((card) => (
        <li
          className={c.bitlearn_cards_card}
          key={card.title_1}
          data-animation="text"
          data-selector="bitlearn-card"
        >
          <div className={c.cover}>
            <Image
              src={card.img}
              height={700}
              width={480}
              alt="info image"
              className="slide-img"
            />
          </div>
          <div className={c.bitlearn_cards_card_info}>
            <h4 data-splitting="chars">{card.title_1}</h4>
            <h2 data-splitting="words">{card.title_2}</h2>
            <p data-splitting="words">{card.info}</p>
            <div
              className={c.bitlearn_cards_card_btns}
              data-selector="bitlearn-btns"
            >
              <Link href="/coming-soon" className="" linkText="Bitlearn">
                <Buttons title="Class Details" arrow started />
              </Link>
              <Buttons title="Download Syllabus" blackText />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InfoCards;
