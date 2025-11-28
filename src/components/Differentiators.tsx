import { Rocket, Building2, ShieldCheck, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentiators = [
  {
    icon: Rocket,
    title: "Implementación acelerada",
    description: "Comienza a operar en días, no en meses. Sin complejidad técnica.",
  },
  {
    icon: Building2,
    title: "Enfoque empresarial",
    description: "Diseñado específicamente para organizaciones con requerimientos corporativos.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad y seguridad",
    description: "Tus datos permanecen en tu infraestructura. Control total y compliance garantizado.",
  },
  {
    icon: Layers,
    title: "Integración multi-fuente",
    description: "Conecta múltiples sistemas, formatos y bases de datos en una única interfaz.",
  },
];

const Differentiators = () => {
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
            Por qué elegir Embebo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Una solución pensada desde cero para las necesidades reales de las empresas modernas.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group flex gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-accent/50 hover:shadow-hover"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
