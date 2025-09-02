import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a stay at Sihaya the Stay. Could you please provide more information?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4" data-testid="hero-content">
        <div className="mb-6">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-4 leading-tight" data-testid="hero-title">
            Relax. Reconnect. <span className="text-secondary">Recharge.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90" data-testid="hero-subtitle">
            Experience serene living in the heart of our farm, surrounded by lush greenery and comfort.
          </p>
          <p className="text-lg opacity-80 font-accent" data-testid="hero-tagline">
            A Home Amidst Nature
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-testid="hero-actions">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground px-8 py-4 text-lg hover:bg-primary/90 transform hover:scale-105 transition-all shadow-lg"
            data-testid="button-book-hero"
          >
            Book Your Stay
          </Button>
          <Button 
            onClick={openWhatsApp}
            size="lg"
            className="bg-secondary text-secondary-foreground px-8 py-4 text-lg hover:bg-secondary/90 transform hover:scale-105 transition-all shadow-lg"
            data-testid="button-whatsapp-hero"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" data-testid="scroll-indicator">
        <ChevronDown className="w-8 h-8 opacity-70" />
      </div>
    </section>
  );
}
