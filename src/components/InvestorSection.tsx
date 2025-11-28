import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InvestorSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-gradient-hero py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
            <TrendingUp className="h-8 w-8" />
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            La nueva forma en que las empresas acceden a su conocimiento
          </h2>
          
          <p className="mb-10 text-lg text-white/90 md:text-xl">
            Embebo está transformando cómo las organizaciones democratizan la información interna, 
            reduciendo tiempos de búsqueda y aumentando la productividad en toda la empresa.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
            >
              Conocer más sobre la visión
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
