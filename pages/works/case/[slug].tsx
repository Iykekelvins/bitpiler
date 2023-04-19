// import Case from "@/components/Works/Case";
import dynamic from "next/dynamic";

const Case = dynamic(() => import("@/components/Works/Case"), { ssr: false });

const caseId = () => {
  return <Case />;
};

export default caseId;
