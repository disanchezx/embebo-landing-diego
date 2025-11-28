import { Card } from "@/components/ui/card";
import { BarChart, TrendingUp, Users, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const useCases = [
  {
    icon: BarChart,
    area: "Analistas",
    title: "Acceso instantáneo a datos",
    examples: ["KPIs históricos", "Reportes financieros", "Tendencias de mercado", "Datos operacionales"],
  },
  {
    icon: TrendingUp,
    area: "Comercial",
    title: "Información de productos y clientes",
    examples: ["Catálogos actualizados", "Políticas comerciales", "Historial de clientes", "Casos de éxito"],
  },
  {
    icon: Users,
    area: "RRHH",
    title: "Políticas y procesos internos",
    examples: ["Manuales de empleado", "Políticas de onboarding", "Beneficios corporativos", "Procedimientos"],
  },
  {
    icon: Code,
    area: "Ingeniería",
    title: "Documentación técnica centralizada",
    examples: ["Arquitectura de sistemas", "APIs y SDKs", "FAQs técnicas", "Repositorios de código"],
  },
];

const UseCases = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <section 
      id="casos-uso"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-gradient-subtle py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Optimiza el trabajo de cada área
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Desde analistas hasta ingeniería, cada equipo encuentra valor inmediato en Embebo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-hover">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <useCase.icon className="h-7 w-7" />
              </div>
              
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                {useCase.area}
              </div>
              
              <h3 className="mb-4 text-xl font-semibold text-foreground">{useCase.title}</h3>
              
              <ul className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
