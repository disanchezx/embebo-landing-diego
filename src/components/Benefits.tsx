import { Database, MessageSquare, Lock, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: MessageSquare,
    title: "Pregunta como hablas",
    description: "No más 'SELECT * FROM...' Solo pregunta: '¿Cuánto vendimos el mes pasado?' y listo.",
    example: "Ejemplo: '¿Quién es el líder del proyecto X?'"
  },
  {
    icon: Database,
    title: "Conecta todo lo que ya usas",
    description: "Google Drive, Notion, Slack, tu CRM... Sí, incluso ese Excel del 2019 que nadie quiere tocar.",
    example: "Funciona con: Drive, Dropbox, Confluence, Salesforce..."
  },
  {
    icon: Zap,
    title: "Listo en una semana",
    description: "No 6 meses de 'implementación'. Configura, conecta tus fuentes, y empieza a buscar.",
    example: "Día 1: Setup • Día 3: Primeras búsquedas • Día 7: Todo el equipo usándolo"
  },
  {
    icon: Lock,
    title: "Tus datos son tuyos",
    description: "Encriptación total. Sin entrenar modelos con tu info. Control granular de quién ve qué.",
    example: "Cumplimos: GDPR, SOC 2, ISO 27001"
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <section
      id="beneficios"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-20 md:py-28 transition-all duration-1000 bg-gradient-to-b from-slate-950 to-slate-900 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-mono text-sm">&lt;benefits&gt;</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Que todos encuentren lo que necesitan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Sin perder 30 minutos buscando "ese documento que alguien envió hace meses".
            <span className="block mt-2 text-base">
              Tu equipo ahorra <span className="text-cyan-400 font-mono font-bold">8 horas/semana</span> en promedio.
            </span>
          </p>
          <div className="inline-block mt-4">
            <span className="text-cyan-400 font-mono text-sm">&lt;/benefits&gt;</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/50 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/50 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              
              {/* Glowing line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110 border border-cyan-500/20">
                <benefit.icon className="h-6 w-6" />
              </div>
              
              <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                <span className="font-mono text-cyan-500/50 text-sm mr-2">0{index + 1}.</span>
                {benefit.title}
              </h3>
              
              <p className="text-slate-300 mb-3 leading-relaxed">{benefit.description}</p>
              
              <p className="text-sm text-slate-400 font-mono border-l-2 border-cyan-500/30 pl-3 italic">
                {benefit.example}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
