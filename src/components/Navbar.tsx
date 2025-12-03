import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#demo", label: "Demo" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#departamentos", label: "Departamentos" },
    { href: "#capacidades", label: "Capacidades" },
    { href: "#caracteristicas", label: "Características" },
    { href: "#casos-uso", label: "Casos de uso" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Embebo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="https://dashboard.embebo.ai" className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-sm">
              Solicitar demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="https://dashboard.embebo.ai" className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-sm">
                Solicitar demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
