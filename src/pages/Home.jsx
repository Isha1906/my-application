import About from "../components/About";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import Work from "../components/Work";

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Work />
    </>
  );
}

export default Home;