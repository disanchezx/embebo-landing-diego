import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Integration {
  id: string;
  name: string;
  category: "communication" | "storage" | "erp" | "productivity";
  icon: string;
  description: string;
  available: boolean;
}

const integrations: Integration[] = [
  // Communication
  {
    id: "slack",
    name: "Slack",
    category: "communication",
    icon: "💬",
    description: "Busca en conversaciones, canales y archivos",
    available: true
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    category: "communication",
    icon: "👥",
    description: "Accede a chats, reuniones y documentos",
    available: false
  },
  
  // Storage
  {
    id: "gdrive",
    name: "Google Drive",
    category: "storage",
    icon: "📁",
    description: "Documentos, hojas de cálculo y presentaciones",
    available: true
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    category: "storage",
    icon: "📊",
    description: "Bibliotecas de documentos corporativos",
    available: false
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "storage",
    icon: "📦",
    description: "Archivos y carpetas compartidas",
    available: false
  },
  
  // ERP
  {
    id: "sap",
    name: "SAP",
    category: "erp",
    icon: "💼",
    description: "Datos de negocio y procesos empresariales",
    available: true
  },
  {
    id: "oracle",
    name: "Oracle",
    category: "erp",
    icon: "🏢",
    description: "Sistema ERP y base de datos",
    available: false
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "erp",
    icon: "☁️",
    description: "CRM y datos de clientes",
    available: false
  },
  
  // Productivity
  {
    id: "notion",
    name: "Notion",
    category: "productivity",
    icon: "📝",
    description: "Wikis, bases de datos y documentación",
    available: false
  },
  {
    id: "confluence",
    name: "Confluence",
    category: "productivity",
    icon: "📚",
    description: "Espacios de trabajo y documentación",
    available: false
  },
  {
    id: "jira",
    name: "Jira",
    category: "productivity",
    icon: "🎯",
    description: "Proyectos, tickets y workflows",
    available: false
  },
  {
    id: "asana",
    name: "Asana",
    category: "productivity",
    icon: "✅",
    description: "Gestión de tareas y proyectos",
    available: false
  }
];

const categoryLabels = {
  communication: "Comunicación",
  storage: "Almacenamiento",
  erp: "ERP & CRM",
  productivity: "Productividad"
};

const CentralizedPlatform = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const availableIntegrations = integrations.filter(i => i.available);
  const comingSoonIntegrations = integrations.filter(i => !i.available);

  return (
    <section 
      id="integraciones"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-muted py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Una plataforma centralizada
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Conecta todos tus sistemas empresariales en un único punto de acceso. 
            Busca información sin importar dónde esté almacenada.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Check className="h-4 w-4 mr-2" />
              {availableIntegrations.length} integraciones disponibles
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              {comingSoonIntegrations.length} próximamente
            </Badge>
          </div>
        </div>

        {/* Available Integrations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Disponibles ahora
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {availableIntegrations.map((integration, index) => (
              <Card 
                key={integration.id}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-2 border-primary/20"
                style={{
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{integration.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{integration.description}</p>
                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                  Disponible
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Integrations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Próximamente
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {comingSoonIntegrations.map((integration, index) => (
              <Card 
                key={integration.id}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card opacity-75"
                style={{
                  animation: `fadeInScale 0.5s ease-out ${(availableIntegrations.length + index) * 0.1}s both`
                }}
              >
                <div className="text-4xl mb-3 grayscale">{integration.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{integration.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{integration.description}</p>
                <Badge variant="outline" className="text-muted-foreground">
                  Próximamente
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Necesitas una integración específica?
              </h3>
              <p className="text-muted-foreground mb-6">
                Trabajamos constantemente en nuevas integraciones. Si tu empresa usa un sistema 
                que no está en la lista, contáctanos y lo priorizaremos.
              </p>
              <Button size="lg" className="gradient-hero">
                Solicitar integración
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Conectores personalizados</h4>
                  <p className="text-sm text-muted-foreground">
                    Desarrollamos integraciones a medida para sistemas propietarios
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">API abierta</h4>
                  <p className="text-sm text-muted-foreground">
                    Construye tus propias integraciones usando nuestra API REST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sincronización en tiempo real</h4>
                  <p className="text-sm text-muted-foreground">
                    Los datos se actualizan automáticamente sin intervención manual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default CentralizedPlatform;