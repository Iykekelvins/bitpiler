import dynamic from "next/dynamic";

const OurTeam = dynamic(() => import("@/components/OurTeam"), { ssr: false });

const ourteam = () => {
  return <OurTeam />;
};

export default ourteam;
