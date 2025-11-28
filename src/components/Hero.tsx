import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden bg-gradient-subtle py-20 pt-32 md:py-32 md:pt-40 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            <span>Búsqueda inteligente empresarial</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            IA que impulsa tu empresa
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Embebo permite a tu organización acceder a su conocimiento interno mediante lenguaje natural, 
            gracias a modelos de IA avanzada.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gradient-hero w-full text-base font-semibold sm:w-auto">
              Solicitar demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full text-base sm:w-auto">
              Hablar con el equipo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default Hero;
