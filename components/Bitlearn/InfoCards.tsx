import { cards } from "@/utils";
import Buttons from "@/shared/Buttons";
import Image from "next/image";
import Link from "next/link";

import c from "./Bitlearn.module.scss";

const InfoCards = () => {
  return (
    <ul className={c.bitlearn_cards}>
      {cards.map((card) => (
        <li
          className={c.bitlearn_cards_card}
          key={card.title_1}
          data-animation="text"
        >
          <Image src={card.img} height={700} width={480} alt="info image" />
          <div className={c.bitlearn_cards_card_info}>
            <h4 data-splitting="chars">{card.title_1}</h4>
            <h2 data-splitting="words">{card.title_2}</h2>
            <p data-splitting="words">{card.info}</p>
            <div className={c.bitlearn_cards_card_btns}>
              <Link href="/coming-soon">
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
