import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

export default Home;