import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border" data-testid="header-main">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2" data-testid="logo-container">
          <img 
            src={logoImage} 
            alt="Sihaya Logo" 
            className="w-16 h-12 object-contain"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8" data-testid="nav-links">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('rooms')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-rooms"
          >
            Rooms
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-gallery"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('location')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-location"
          >
            Location
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
        </div>
        
        <div className="flex items-center space-x-3" data-testid="header-actions">
          <Button 
            onClick={() => scrollToSection('gallery')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-view-gallery"
          >
            View Gallery
          </Button>
        </div>
      </nav>
    </header>
  );
}
