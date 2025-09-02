import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "A peaceful getaway! The mango trees and garden made it magical. Hosts were super friendly and the rooms were spotlessly clean.",
      author: "Ananya",
      location: "Bangalore",
      initial: "A"
    },
    {
      id: 2,
      rating: 5,
      text: "Perfect for families! Kids loved the garden and we enjoyed the peaceful environment. The kitchen facilities were excellent.",
      author: "Raj Kumar",
      location: "Chennai",
      initial: "R"
    },
    {
      id: 3,
      rating: 5,
      text: "Amazing location close to Mysore attractions. The natural setting is incredibly relaxing and the hosts are wonderful people.",
      author: "Sneha Patel",
      location: "Mumbai",
      initial: "S"
    }
  ];

  return (
    <section className="py-20 bg-card" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-testid="testimonials-header">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4" data-testid="testimonials-title">
            Guest Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-subtitle">
            Hear from our guests about their memorable stays at Sihaya the Stay.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-muted rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex items-center mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-muted-foreground mb-4" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center" data-testid={`testimonial-author-${testimonial.id}`}>
                <div className={`w-10 h-10 ${testimonial.id === 2 ? 'bg-secondary' : 'bg-primary'} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
