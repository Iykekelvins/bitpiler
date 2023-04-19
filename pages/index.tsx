import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/Home"), { ssr: false });

const Homepage = () => {
  return <Home />;
};

export default Homepage;
