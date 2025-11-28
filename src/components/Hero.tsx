import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 pt-32 md:py-32 md:pt-40 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 border border-blue-400/30">
            <Sparkles className="h-4 w-4" />
            <span>Búsqueda inteligente empresarial</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            IA que impulsa tu empresa
          </h1>
          
          <p className="mb-10 text-lg text-blue-100 md:text-xl lg:text-2xl">
            Embebo permite a tu organización acceder a su conocimiento interno mediante lenguaje natural,
            gracias a modelos de IA avanzada.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full text-base font-semibold sm:w-auto shadow-lg">
              Solicitar demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900 w-full text-base font-semibold sm:w-auto shadow-lg border-0">
              Hablar con el equipo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  );
};

export default Hero;
