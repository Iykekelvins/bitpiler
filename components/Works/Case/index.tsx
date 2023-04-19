import { useEffect } from "react";

import Bottom from "./Bottom";
import Center from "./Center";
import Top from "./Top";

import c from "../Works.module.scss";
import { animateText } from "@/animations";

const Case = () => {
  useEffect(() => {
    animateText('[data-selector="text"] .word');
    animateText('[data-selector="text-2"] .word');
    animateText('[data-selector="text-3"] .word');
    animateText('[data-selector="text-4-a"] .word');
    animateText('[data-selector="text-4-b"] .word');
    animateText('[data-selector="entry"] h4');
    animateText('[data-selector="entry"] h1 .word');
    animateText('[data-selector="entry-2"] h4');
    animateText('[data-selector="entry-2"] h1 .word');
    animateText('[data-selector="entry-3-text"] .word');
    animateText('[data-selector="entry-4"] h4');
    animateText('[data-selector="entry-4"] h1 .word');
  }, []);
  return (
    <div className={c.case}>
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Case;
