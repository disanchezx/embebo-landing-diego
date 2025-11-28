import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Differentiators from "@/components/Differentiators";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <UseCases />
      <Differentiators />
      <InvestorSection />
      <Footer />
    </div>
  );
};

export default Index;
