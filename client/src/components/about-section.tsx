import { Leaf, Bed, Users, Car } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { icon: Leaf, text: "Nature Stay" },
    { icon: Bed, text: "4 Cozy Rooms" },
    { icon: Users, text: "Family Friendly" },
    { icon: Car, text: "Free Parking" }
  ];

  return (
    <section id="about" className="py-20 bg-card" data-testid="about-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-testid="about-image">
            <img 
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Sihaya the Stay exterior view" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover" 
            />
          </div>
          
          <div className="space-y-6" data-testid="about-content">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary" data-testid="about-title">
              About Sihaya the Stay
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
              Nestled inside our family farm filled with coconut and mango trees, Sihaya the Stay offers 4 cozy rooms with attached bathrooms, a spacious common area with TV and sofa, and a fully equipped kitchen. Step outside to enjoy our small garden and experience nature at its best.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="about-highlights">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3"
                  data-testid={`highlight-${index}`}
                >
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <highlight.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
