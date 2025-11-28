import { Database, MessageSquare, Lock, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: MessageSquare,
    title: "Búsqueda con lenguaje natural",
    description: "Encuentra información usando tus propias palabras. Sin consultas complejas, sin SQL.",
  },
  {
    icon: Database,
    title: "Integración total",
    description: "Conecta documentos, bases de datos y sistemas internos en una única plataforma.",
  },
  {
    icon: Zap,
    title: "Implementación rápida",
    description: "Comienza a trabajar en días, no en meses. Infraestructura lista para empresas.",
  },
  {
    icon: Lock,
    title: "Seguridad empresarial",
    description: "Control de acceso por roles, VPC dedicada y cumplimiento de estándares corporativos.",
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <section 
      id="beneficios"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Democratiza la información de tu empresa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Haz que cada colaborador tenga acceso instantáneo al conocimiento que necesita para trabajar mejor.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:shadow-hover"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
