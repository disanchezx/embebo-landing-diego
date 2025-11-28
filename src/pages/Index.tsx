import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import Benefits from "@/components/Benefits";
import DepartmentUseCases from "@/components/DepartmentUseCases";
import CategorizedCapabilities from "@/components/CategorizedCapabilities";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import PlatformArchitecture from "@/components/PlatformArchitecture";
import CentralizedPlatform from "@/components/CentralizedPlatform";
import Differentiators from "@/components/Differentiators";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DemoSection />
      <Benefits />
      
      {/* New Sections - Department Use Cases */}
      <DepartmentUseCases />
      
      {/* New Sections - Categorized Capabilities */}
      <CategorizedCapabilities />
      
      <Features />
      <HowItWorks />
      <UseCases />
      
      {/* New Sections - Platform Architecture */}
      <PlatformArchitecture />
      
      {/* New Sections - Centralized Platform */}
      <CentralizedPlatform />
      
      <Differentiators />
      <InvestorSection />
      <Footer />
    </div>
  );
};

export default Index;
