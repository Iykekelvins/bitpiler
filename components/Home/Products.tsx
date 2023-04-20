import { pdts } from "@/utils";

import c from "./Home.module.scss";

const Products = () => {
  return (
    <div className={c.home_pdts}>
      <div className={c.home_pdts_intro} data-animation="text">
        <h4 className="white" data-splitting="chars">
          OUR PROCESS
        </h4>
        <h1 className="white" data-splitting="words">
          Building Products
        </h1>
      </div>
      <div className={c.home_pdts_list}>
        {pdts.map((pdt) => (
          <div
            key={pdt.title}
            className={c.home_pdts_list_item}
            data-animation="text"
          >
            <h3 data-splitting="words">{pdt.title}</h3>
            <p data-splitting="words">{pdt.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
