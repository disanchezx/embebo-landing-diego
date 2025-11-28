import { Card } from "@/components/ui/card";
import { Shield, Zap, Lock, Server, Database, Cloud, Cpu, HardDrive } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ArchitectureCard {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const ArchitectureCardComponent = ({ icon, title, description, highlight = false }: ArchitectureCard) => (
  <Card className={`p-4 text-center transition-all duration-300 hover:scale-105 ${
    highlight ? 'border-primary border-2 bg-primary/5' : 'bg-card'
  }`}>
    <div className="text-3xl mb-2">{icon}</div>
    <h4 className="font-semibold text-sm mb-1 text-foreground">{title}</h4>
    <p className="text-xs text-muted-foreground">{description}</p>
  </Card>
);

const PlatformArchitecture = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      id="arquitectura"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-gradient-to-br from-background via-muted to-background py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Arquitectura enterprise-grade
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Infraestructura escalable y segura basada en AWS Agent Core
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mx-auto max-w-6xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: External Systems */}
            <div className="space-y-4">
              <h3 className="font-semibold text-center mb-6 text-lg text-foreground">
                Tus Sistemas
              </h3>
              <ArchitectureCardComponent
                icon="📦"
                title="S3 Storage"
                description="Documentos empresariales"
              />
              <ArchitectureCardComponent
                icon="💼"
                title="SAP ERP"
                description="Datos de negocio"
              />
              <ArchitectureCardComponent
                icon="💬"
                title="Slack"
                description="Conversaciones"
              />
              <ArchitectureCardComponent
                icon="📁"
                title="Google Drive"
                description="Archivos compartidos"
              />
            </div>

            {/* Column 2: Embebo Core */}
            <div className="space-y-4">
              <h3 className="font-semibold text-center mb-6 text-lg text-foreground">
                Embebo Core
              </h3>
              <ArchitectureCardComponent
                icon="🤖"
                title="Agent Core Runtime"
                description="Motor de IA"
                highlight
              />
              <ArchitectureCardComponent
                icon="🧠"
                title="AWS Bedrock"
                description="LLMs avanzados"
                highlight
              />
              <ArchitectureCardComponent
                icon="⚡"
                title="ElastiCache"
                description="Cache inteligente"
              />
              <ArchitectureCardComponent
                icon="🗄️"
                title="DynamoDB"
                description="Metadatos"
              />
            </div>

            {/* Column 3: Output */}
            <div className="space-y-4">
              <h3 className="font-semibold text-center mb-6 text-lg text-foreground">
                Tu Equipo
              </h3>
              <ArchitectureCardComponent
                icon="💻"
                title="Web App"
                description="Interfaz intuitiva"
              />
              <ArchitectureCardComponent
                icon="📱"
                title="Mobile App"
                description="iOS & Android"
              />
              <ArchitectureCardComponent
                icon="🔌"
                title="API REST"
                description="Integraciones custom"
              />
              <ArchitectureCardComponent
                icon="🤖"
                title="Slack Bot"
                description="Asistente en chat"
              />
            </div>
          </div>

          {/* Connection Lines (decorative) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
            <svg className="w-full h-full" style={{ opacity: 0.2 }}>
              {/* Line from column 1 to column 2 */}
              <line 
                x1="33%" 
                y1="50%" 
                x2="50%" 
                y2="50%" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                className="text-primary"
              />
              {/* Line from column 2 to column 3 */}
              <line 
                x1="50%" 
                y1="50%" 
                x2="67%" 
                y2="50%" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                className="text-primary"
              />
            </svg>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2 text-foreground">
              Seguridad Enterprise
            </h4>
            <p className="text-sm text-muted-foreground">
              VPC dedicada, encriptación end-to-end y cumplimiento SOC 2 Type II
            </p>
          </Card>
          
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2 text-foreground">
              Escalabilidad Automática
            </h4>
            <p className="text-sm text-muted-foreground">
              Infraestructura serverless que crece con tu empresa sin intervención manual
            </p>
          </Card>
          
          <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
            <Lock className="h-10 w-10 text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2 text-foreground">
              Soberanía de Datos
            </h4>
            <p className="text-sm text-muted-foreground">
              Tus datos nunca salen de tu infraestructura AWS. Control total y compliance garantizado
            </p>
          </Card>
        </div>

        {/* Technical Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-foreground">
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Cloud, label: "AWS" },
              { icon: Server, label: "Agent Core" },
              { icon: Cpu, label: "Bedrock" },
              { icon: Database, label: "DynamoDB" },
              { icon: HardDrive, label: "S3" },
              { icon: Zap, label: "Lambda" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
              >
                <tech.icon className="h-4 w-4" />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitecture;