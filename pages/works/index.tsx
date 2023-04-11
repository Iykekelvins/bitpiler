import dynamic from "next/dynamic";
const Works = dynamic(() => import("../../components/Works"), { ssr: false });
const works = () => {
  return <Works />;
};

export default works;
