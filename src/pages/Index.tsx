import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import Benefits from "@/components/Benefits";
import DepartmentUseCases from "@/components/DepartmentUseCases";
import CategorizedCapabilities from "@/components/CategorizedCapabilities";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import CentralizedPlatform from "@/components/CentralizedPlatform";
import Differentiators from "@/components/Differentiators";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="demo">
        <DemoSection />
      </div>
      <div id="beneficios">
        <Benefits />
      </div>
      
      {/* New Sections - Department Use Cases */}
      <div id="departamentos">
        <DepartmentUseCases />
      </div>
      
      {/* New Sections - Categorized Capabilities */}
      <div id="capacidades">
        <CategorizedCapabilities />
      </div>
      
      <div id="caracteristicas">
        <Features />
      </div>
      <HowItWorks />
      <div id="casos-uso">
        <UseCases />
      </div>
      
      {/* New Sections - Centralized Platform */}
      <CentralizedPlatform />
      
      <Differentiators />
      <InvestorSection />
      <Footer />
    </div>
  );
};

export default Index;
