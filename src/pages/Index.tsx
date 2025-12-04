import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div id="demo">
        <DemoSection />
      </div>
      <div id="beneficios">
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
