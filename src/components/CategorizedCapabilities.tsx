import { Card } from "@/components/ui/card";
import { 
  Search, 
  FileText, 
  Zap, 
  FileSearch, 
  Lightbulb, 
  UserPlus, 
  Network,
  FileStack,
  BarChart3,
  PenTool,
  Brain,
  MessageSquare,
  Workflow,
  Bell,
  RefreshCw
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Capability {
  icon: typeof FileSearch;
  title: string;
  description: string;
}

interface CapabilityPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Search;
  color: string;
  capabilities: Capability[];
}

const pillars: CapabilityPillar[] = [
  {
    id: "find",
    title: "Encuentra y comprende",
    subtitle: "información empresarial",
    icon: Search,
    color: "blue",
    capabilities: [
      {
        icon: FileSearch,
        title: "Busca en documentos, datos y personas",
        description: "Accede a información dispersa en múltiples sistemas usando lenguaje natural"
      },
      {
        icon: Lightbulb,
        title: "Explora insights y descubrimientos",
        description: "Descubre patrones y conexiones que no sabías que existían"
      },
      {
        icon: UserPlus,
        title: "Onboarding a nuevos proyectos",
        description: "Acelera la curva de aprendizaje con contexto instantáneo"
      },
      {
        icon: Network,
        title: "Conecta conocimiento fragmentado",
        description: "Relaciona información de diferentes fuentes automáticamente"
      }
    ]
  },
  {
    id: "create",
    title: "Crea y resume",
    subtitle: "contenido inteligente",
    icon: FileText,
    color: "purple",
    capabilities: [
      {
        icon: FileStack,
        title: "Resume docs, threads y reuniones",
        description: "Extrae lo esencial de documentos largos y conversaciones"
      },
      {
        icon: BarChart3,
        title: "Analiza para obtener insights",
        description: "Genera análisis profundos y respuestas fundamentadas"
      },
      {
        icon: PenTool,
        title: "Genera contenido contextual",
        description: "Crea reportes, emails y documentos basados en tu información"
      },
      {
        icon: Brain,
        title: "Respuestas con fuentes verificadas",
        description: "Cada respuesta incluye referencias a documentos originales"
      }
    ]
  },
  {
    id: "automate",
    title: "Automatiza",
    subtitle: "tu trabajo diario",
    icon: Zap,
    color: "orange",
    capabilities: [
      {
        icon: MessageSquare,
        title: "Respuestas automáticas inteligentes",
        description: "Responde preguntas frecuentes sin intervención humana"
      },
      {
        icon: Workflow,
        title: "Automatiza tareas repetitivas",
        description: "Workflows que se ejecutan basados en triggers y condiciones"
      },
      {
        icon: Bell,
        title: "Notificaciones proactivas",
        description: "Alertas cuando información relevante está disponible"
      },
      {
        icon: RefreshCw,
        title: "Sincronización continua",
        description: "Mantén tu conocimiento actualizado en tiempo real"
      }
    ]
  }
];

const CategorizedCapabilities = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      id="capacidades"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Todo lo que necesitas en una plataforma
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Embebo combina búsqueda, análisis y automatización para transformar cómo trabaja tu empresa
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {pillars.map((pillar, pillarIndex) => (
            <div 
              key={pillar.id} 
              className="space-y-6"
              style={{
                animation: `fadeInUp 0.6s ease-out ${pillarIndex * 0.2}s both`
              }}
            >
              {/* Pillar Header */}
              <div className="text-center">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-4 ${
                  pillar.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
                  pillar.color === 'purple' ? 'bg-purple-500/10 text-purple-500' :
                  'bg-orange-500/10 text-orange-500'
                }`}>
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-4">
                {pillar.capabilities.map((capability, capIndex) => (
                  <Card 
                    key={capIndex} 
                    className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border"
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                          <capability.icon className="h-5 w-5 text-foreground" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {capability.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CategorizedCapabilities;