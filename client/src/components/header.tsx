import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a stay at Sihaya the Stay. Could you please provide more information?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border" data-testid="header-main">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2" data-testid="logo-container">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">S</span>
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl text-primary">Sihaya</h1>
            <p className="text-xs text-muted-foreground">The Stay</p>
          </div>
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
            onClick={openWhatsApp}
            variant="default"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            data-testid="button-whatsapp-header"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-book-header"
          >
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
