import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, File, FileCode, FileSpreadsheet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [documents, setDocuments] = useState<Array<{
    id: number;
    x: number;
    y: number;
    icon: typeof FileText;
    rotation: number;
    scale: number;
  }>>([]);

  // Initialize floating documents
  useEffect(() => {
    const icons = [FileText, File, FileCode, FileSpreadsheet];
    const newDocuments = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
    }));
    setDocuments(newDocuments);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (ref as React.RefObject<HTMLElement>).current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const element = (ref as React.RefObject<HTMLElement>).current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [ref]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 pt-32 md:py-32 md:pt-40 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
      
      {/* Animated Scan Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(59,130,246,0.03)_50%)] bg-[length:100%_4px] animate-scan pointer-events-none" />
      
      {/* Floating Documents - Interactive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {documents.map((doc) => {
          const distanceX = mousePosition.x - doc.x;
          const distanceY = mousePosition.y - doc.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          const maxDistance = 30;
          const influence = Math.max(0, 1 - distance / maxDistance);
          
          const offsetX = distanceX * influence * 0.5;
          const offsetY = distanceY * influence * 0.5;
          
          const Icon = doc.icon;
          
          return (
            <div
              key={doc.id}
              className="absolute transition-all duration-300 ease-out"
              style={{
                left: `${doc.x}%`,
                top: `${doc.y}%`,
                transform: `
                  translate(${offsetX}%, ${offsetY}%)
                  rotate(${doc.rotation + offsetX}deg)
                  scale(${doc.scale})
                `,
                opacity: 0.1 + influence * 0.2,
              }}
            >
              <Icon
                className="text-cyan-400"
                size={24 + influence * 12}
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 border border-blue-400/30">
            <Sparkles className="h-4 w-4" />
            <span>Tu conocimiento, al alcance de todos</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl relative">
            <span className="relative inline-block">
              Tu equipo ya tiene las respuestas.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 blur-sm"></span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient">
              Solo necesita encontrarlas más rápido.
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-blue-100 md:text-xl lg:text-2xl">
            ¿Cuántas veces tu equipo ha perdido 30 minutos buscando un documento que "alguien envió hace meses"?
            <br />
            <span className="text-blue-200 font-semibold">Nosotros acabamos con eso.</span>
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://dashboard.embebo.com.co" className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white w-full text-base font-semibold sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] px-6 py-4 rounded-lg z-[99] flex items-center justify-center group transition-all duration-300 border border-blue-400/20">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative flex items-center gap-2">
                  <span className="font-mono">$</span> Ver demo en 2 minutos
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            <p className="text-sm text-blue-200/80 mt-2 sm:mt-0 font-mono">
              <span className="text-cyan-400">[</span> Sin registro <span className="text-cyan-400">•</span> Sin compromiso <span className="text-cyan-400">•</span> Gratis <span className="text-cyan-400">]</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - Tech Style */}
      <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-3xl" />
      
      {/* Corner Brackets - Hacker Style */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30"></div>
    </section>
  );
};

export default Hero;
