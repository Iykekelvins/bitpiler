import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"), { ssr: false });

const about = () => {
  return <About />;
};

export default about;
