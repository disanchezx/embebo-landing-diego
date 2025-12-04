import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-cyan-500/20 bg-slate-950 py-12 md:py-16 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      {/* Gradient Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-cyan-500 font-mono text-xl">&gt;</span>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                Embebo
              </h3>
              <span className="w-2 h-5 bg-cyan-400 animate-blink"></span>
            </div>
            <p className="mb-6 max-w-md text-slate-400 font-mono text-sm leading-relaxed">
              <span className="text-cyan-500">[</span> Búsqueda inteligente empresarial <span className="text-cyan-500">]</span>
              <br />
              Tu conocimiento, al alcance de todos.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:contacto@embebo.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 transition-all hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 transition-all hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 transition-all hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 transition-all hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white font-mono flex items-center gap-2">
              <span className="text-cyan-500 text-sm">01.</span>
              Enlaces
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#demo" className="text-slate-400 transition-all hover:text-cyan-400 font-mono text-sm flex items-center gap-2 group">
                  <span className="text-cyan-500/50 group-hover:text-cyan-500">&gt;</span>
                  Demo
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-slate-400 transition-all hover:text-cyan-400 font-mono text-sm flex items-center gap-2 group">
                  <span className="text-cyan-500/50 group-hover:text-cyan-500">&gt;</span>
                  Beneficios
                </a>
              </li>
              <li>
                <a href="https://dashboard.embebo.ai" className="text-slate-400 transition-all hover:text-cyan-400 font-mono text-sm flex items-center gap-2 group">
                  <span className="text-cyan-500/50 group-hover:text-cyan-500">&gt;</span>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white font-mono flex items-center gap-2">
              <span className="text-cyan-500 text-sm">02.</span>
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contacto@embebo.com" className="text-slate-400 transition-all hover:text-cyan-400 font-mono text-sm flex items-center gap-2 group">
                  <span className="text-cyan-500/50 group-hover:text-cyan-500">&gt;</span>
                  contacto@embebo.com
                </a>
              </li>
              <li className="text-slate-400 font-mono text-sm flex items-center gap-2">
                <span className="text-cyan-500/50">&gt;</span>
                <span className="text-slate-500">Status:</span>
                <span className="text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 font-mono">
              <span className="text-cyan-500">$</span> &copy; {new Date().getFullYear()} Embebo
              <span className="text-cyan-500 mx-2">•</span>
              <span className="text-slate-600">v2.0.0</span>
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Términos
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
