import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Code, TrendingUp, Users, BarChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface DepartmentUseCase {
  id: string;
  department: string;
  icon: typeof Code;
  color: string;
  headline: string;
  description: string;
  scenario: {
    question: string;
    process: string[];
    result: string;
  };
  benefits: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const departments: DepartmentUseCase[] = [
  {
    id: "engineering",
    department: "Ingeniería",
    icon: Code,
    color: "blue",
    headline: "Debug y documentación técnica al instante",
    description: "Encuentra arquitectura, APIs y soluciones a errores sin salir de tu flujo de trabajo.",
    scenario: {
      question: "¿Por qué está fallando el checkout en producción?",
      process: [
        "Buscando en logs de producción...",
        "Analizando commits recientes...",
        "Revisando documentación de API de pagos..."
      ],
      result: "El spike de latencia está relacionado con el commit 3d21f87 que agregó una llamada async a la DB. Revisa los incidentes relacionados y las regresiones de performance."
    },
    benefits: [
      "Reduce tiempo de debugging en 60%",
      "Acceso a toda la documentación técnica",
      "Onboarding de nuevos devs 3x más rápido"
    ],
    metrics: [
      { label: "Tiempo ahorrado", value: "15h/sem" },
      { label: "Tickets resueltos", value: "+40%" }
    ]
  },
  {
    id: "sales",
    department: "Ventas",
    icon: TrendingUp,
    color: "green",
    headline: "Información de clientes y productos al alcance",
    description: "Prepara reuniones, encuentra casos de éxito y accede a políticas comerciales en segundos.",
    scenario: {
      question: "¿Cuál es el historial de compras de Acme Corp?",
      process: [
        "Buscando en CRM (SAP)...",
        "Revisando contratos activos...",
        "Analizando interacciones previas..."
      ],
      result: "Acme Corp es cliente desde 2021, con 3 contratos activos por $450K anuales. Último contacto: 15 días atrás sobre expansión a LATAM. Casos de éxito similares: TechCo y InnovateLab."
    },
    benefits: [
      "Preparación de reuniones en 5 minutos",
      "Acceso a todo el historial de clientes",
      "Cierre de deals 25% más rápido"
    ],
    metrics: [
      { label: "Prep time", value: "-70%" },
      { label: "Win rate", value: "+25%" }
    ]
  },
  {
    id: "hr",
    department: "RRHH",
    icon: Users,
    color: "purple",
    headline: "Políticas y procesos siempre actualizados",
    description: "Responde preguntas de empleados y gestiona onboarding con información centralizada.",
    scenario: {
      question: "¿Cuál es la política de trabajo remoto?",
      process: [
        "Buscando en manual del empleado...",
        "Revisando políticas actualizadas...",
        "Consultando beneficios relacionados..."
      ],
      result: "La política de trabajo remoto permite hasta 3 días/semana. Incluye subsidio de internet ($50/mes) y equipo de oficina. Aprobación del manager requerida. Última actualización: Enero 2024."
    },
    benefits: [
      "Respuestas instantáneas a empleados",
      "Onboarding automatizado",
      "Reducción de tickets a RRHH en 50%"
    ],
    metrics: [
      { label: "Tickets RRHH", value: "-50%" },
      { label: "Satisfacción", value: "4.8/5" }
    ]
  },
  {
    id: "analytics",
    department: "Analítica",
    icon: BarChart,
    color: "orange",
    headline: "KPIs y reportes sin consultas SQL",
    description: "Accede a datos históricos y genera insights usando lenguaje natural.",
    scenario: {
      question: "¿Cuál fue el revenue del Q3 por región?",
      process: [
        "Consultando base de datos financiera...",
        "Agregando datos por región...",
        "Generando comparativa YoY..."
      ],
      result: "Q3 2024: LATAM $2.3M (+15% YoY), NA $5.1M (+8%), EU $3.7M (+22%). Crecimiento total: +14%. Drivers principales: expansión en EU y nuevos productos en LATAM."
    },
    benefits: [
      "Reportes en minutos, no horas",
      "Sin necesidad de SQL",
      "Insights automáticos con IA"
    ],
    metrics: [
      { label: "Tiempo de reporte", value: "-80%" },
      { label: "Análisis/día", value: "3x más" }
    ]
  }
];

const DepartmentUseCases = () => {
  const [activeTab, setActiveTab] = useState("engineering");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const activeDept = departments.find(d => d.id === activeTab) || departments[0];

  return (
    <section 
      id="casos-departamento"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-muted py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            IA que trabaja para cada equipo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Desde ingeniería hasta ventas, cada departamento encuentra valor inmediato en Embebo
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
            {departments.map((dept) => (
              <TabsTrigger 
                key={dept.id} 
                value={dept.id}
                className="flex items-center gap-2 py-3"
              >
                <dept.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{dept.department}</span>
                <span className="sm:hidden">{dept.department.slice(0, 4)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id} className="mt-0">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                      {dept.headline}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {dept.description}
                    </p>
                  </div>
                  
                  {/* Benefits */}
                  <div className="space-y-3">
                    {dept.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {dept.metrics.map((metric, i) => (
                      <Card key={i} className="p-4 bg-card">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Right: Scenario Demo */}
                <Card className="p-6 bg-gradient-to-br from-card to-muted border-border">
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    {dept.department}
                  </Badge>
                  
                  <div className="space-y-6">
                    {/* Question */}
                    <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                      <p className="font-medium text-foreground">
                        {dept.scenario.question}
                      </p>
                    </div>
                    
                    {/* Process */}
                    <div className="space-y-3">
                      {dept.scenario.process.map((step, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                          style={{ 
                            animation: `fadeIn 0.5s ease-in ${i * 0.2}s both` 
                          }}
                        >
                          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Result */}
                    <div className="p-4 bg-card rounded-lg border-l-4 border-accent shadow-sm">
                      <p className="text-sm text-foreground leading-relaxed">
                        {dept.scenario.result}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default DepartmentUseCases;