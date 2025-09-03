import { MapPin, Clock, Car } from "lucide-react";

export default function LocationSection() {
  const locationDetails = [
    {
      icon: MapPin,
      title: "Address",
      description: "Sihaya Farm, Near Mysore, Karnataka"
    },
    {
      icon: Clock,
      title: "Travel Time",
      description: "1 hour 20 minutes from Mysore city center"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Free parking available"
    }
  ];

  const nearbyAttractions = [
    "Melukote - 23 mins",
    "Srirangapatana - 50 mins",
    "Brindavan Gardens - 55 mins",
    "Mysore Palace - 1 hr 20 mins",
    "Chamundi Hills - 1 hr 30 mins"
  ];

  return (
    <section id="location" className="py-20 bg-muted" data-testid="location-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-testid="location-header">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4" data-testid="location-title">
            Find Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="location-subtitle">
            Located just 1 hr 20 minutes from Mysore city, surrounded by nature yet easily accessible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-card rounded-2xl p-8" data-testid="location-details">
            <h3 className="font-heading font-bold text-2xl mb-6" data-testid="location-details-title">
              Location Details
            </h3>
            
            <div className="space-y-4 mb-8" data-testid="location-info">
              {locationDetails.map((detail, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3"
                  data-testid={`location-detail-${index}`}
                >
                  <detail.icon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{detail.title}</p>
                    <p className="text-muted-foreground">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h4 className="font-heading font-bold text-lg mb-4" data-testid="attractions-title">
              Nearby Attractions
            </h4>
            <div className="space-y-2" data-testid="attractions-list">
              {nearbyAttractions.map((attraction, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2"
                  data-testid={`attraction-${index}`}
                >
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm">{attraction}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg" data-testid="map-container">
            <div className="w-full h-96 bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.014987174257!2d76.705137!3d12.729537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf91e42316f2bb%3A0x7fc86b4d50f8d5e3!2sSujay%E2%80%99s%20Farm!5e0!3m2!1sen!2sin!4v1693732300000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sihaya the Stay Location"
                data-testid="google-map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
