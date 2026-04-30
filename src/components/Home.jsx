import logo from "../assets/logo.png";
import Features from "./HomeComponents/Features";
import Hero from "./HomeComponents/Hero";

function Home({ activeBtn, setActiveBtn }) {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default Home;
