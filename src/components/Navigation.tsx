import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-poppins font-bold text-xl text-primary">AgriVaani</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Contact
            </button>
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 golden-glow">
              Try Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-foreground hover:text-primary smooth-transition font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left py-2 text-foreground hover:text-primary smooth-transition font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-left py-2 text-foreground hover:text-primary smooth-transition font-medium"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground hover:text-primary smooth-transition font-medium"
              >
                Contact
              </button>
              <Button variant="default" className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
                Try Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;