import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

const contact = () => {
  return <Contact />;
};

export default contact;
