import dynamic from "next/dynamic";

const Bitlearn = dynamic(() => import("@/components/Bitlearn"), { ssr: false });

const bitlearn = () => {
  return <Bitlearn />;
};

export default bitlearn;
