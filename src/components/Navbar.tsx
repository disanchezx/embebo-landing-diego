import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#demo", label: "Demo" },
    { href: "#beneficios", label: "Beneficios" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-slate-950/90 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono flex items-center gap-2 group">
              <span className="text-cyan-500 group-hover:animate-pulse">&gt;</span>
              Embebo
              <span className="w-2 h-5 bg-cyan-400 animate-blink"></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-400 transition-all hover:text-cyan-400 font-mono relative group"
              >
                <span className="text-cyan-500/50 text-xs mr-1">0{index + 1}</span>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="https://dashboard.embebo.com.co" className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/30 font-mono group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-1">
                <span className="text-cyan-300">$</span> Solicitar demo
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-all hover:bg-cyan-500/10 rounded-lg border border-transparent hover:border-cyan-500/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-400 transition-all hover:bg-cyan-500/10 hover:text-cyan-400 py-3 px-4 rounded-lg font-mono border border-transparent hover:border-cyan-500/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-cyan-500/50 text-xs mr-2">0{index + 1}</span>
                  {item.label}
                </a>
              ))}
              <a href="https://dashboard.embebo.com.co" className="mt-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/30 font-mono text-center">
                <span className="text-cyan-300">$</span> Solicitar demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
