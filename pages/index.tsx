import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/Home"));

const Homepage = () => {
  return <Home />;
};

export default Homepage;
