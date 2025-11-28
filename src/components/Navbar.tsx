import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Embebo</span>
          </div>
          
          <div className="hidden items-center gap-6 md:flex">
            <a href="#beneficios" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Beneficios
            </a>
            <a href="#caracteristicas" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Características
            </a>
            <a href="#casos-uso" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Casos de uso
            </a>
            <Button size="sm" className="gradient-hero">
              Solicitar demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
