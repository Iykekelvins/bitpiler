import dynamic from "next/dynamic";

const Careers = dynamic(() => import("@/components/Careers"), { ssr: false });

const careers = () => {
  return <Careers />;
};

export default careers;
