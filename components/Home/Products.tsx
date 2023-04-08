import { pdts } from "@/utils";

import c from "./Home.module.scss";

const Products = () => {
  return (
    <div className={c.home_pdts}>
      <div className={c.home_pdts_intro}>
        <h4 className="white">OUR PROCESS</h4>
        <h1 className="white">Building Products</h1>
      </div>
      <div className={c.home_pdts_list}>
        {pdts.map((pdt) => (
          <div key={pdt.title} className={c.home_pdts_list_item}>
            <h3>{pdt.title}</h3>
            <p>{pdt.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
