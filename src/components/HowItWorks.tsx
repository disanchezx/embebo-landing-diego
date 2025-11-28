import { Upload, Cpu, MessageCircle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Upload,
    title: "Cargar información",
    description: "Conecta documentos, bases de datos y sistemas internos",
  },
  {
    icon: Cpu,
    title: "Procesamiento IA",
    description: "Embebo indexa y estructura tu información automáticamente",
  },
  {
    icon: MessageCircle,
    title: "Búsqueda inteligente",
    description: "Pregunta en lenguaje natural lo que necesitas",
  },
  {
    icon: CheckCircle,
    title: "Respuestas accionables",
    description: "Obtén información precisa con contexto y fuentes",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Cómo funciona Embebo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un proceso simple que transforma cómo tu organización accede al conocimiento interno.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-8 hidden h-full w-0.5 bg-border md:block lg:left-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                  <h3 className="mb-3 text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>

                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                  <step.icon className="h-8 w-8" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
