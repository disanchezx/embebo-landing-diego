import { Shield, Users, BarChart3, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Seguridad empresarial",
    description: "VPC dedicada, encriptación end-to-end y cumplimiento de estándares corporativos.",
  },
  {
    icon: Users,
    title: "Roles y permisos",
    description: "Control granular de acceso según área, equipo y nivel de responsabilidad.",
  },
  {
    icon: Cloud,
    title: "Integración AWS Bedrock",
    description: "Modelos de IA avanzados con infraestructura escalable y confiable.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de administración",
    description: "Monitorea uso, performance y accesos desde un panel centralizado.",
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <section 
      id="caracteristicas"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-muted py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Características clave
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Construido para cumplir con los estándares más exigentes de seguridad y escalabilidad empresarial.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
