import Bottom from "./Bottom";
import Center from "./Center";
import Top from "./Top";

import c from "../Works.module.scss";

const Case = () => {
  return (
    <div className={c.case}>
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Case;
