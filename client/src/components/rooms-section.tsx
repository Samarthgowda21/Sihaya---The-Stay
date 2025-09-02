import { Wifi, Snowflake, Tv, Fan, Leaf, Coffee, Bath, Utensils, Sofa, Car, Sprout } from "lucide-react";

export default function RoomsSection() {
  const rooms = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Deluxe Room",
      description: "Spacious, private bathroom, WiFi included.",
      amenities: [
        { icon: Wifi, text: "WiFi" },
        { icon: Snowflake, text: "AC" },
        { icon: Tv, text: "TV" }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Garden View Room",
      description: "Peaceful garden views, private bathroom, WiFi included.",
      amenities: [
        { icon: Wifi, text: "WiFi" },
        { icon: Fan, text: "Fan" },
        { icon: Leaf, text: "Garden" }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Cozy Room",
      description: "Intimate space, private bathroom, WiFi included.",
      amenities: [
        { icon: Wifi, text: "WiFi" },
        { icon: Fan, text: "Fan" },
        { icon: Coffee, text: "Tea/Coffee" }
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Standard Room",
      description: "Comfortable basics, private bathroom, WiFi included.",
      amenities: [
        { icon: Wifi, text: "WiFi" },
        { icon: Fan, text: "Fan" },
        { icon: Bath, text: "Private Bath" }
      ]
    }
  ];

  const sharedAmenities = [
    { icon: Utensils, text: "Kitchen" },
    { icon: Sofa, text: "Common Area" },
    { icon: Car, text: "Parking" },
    { icon: Sprout, text: "Garden" },
    { icon: Tv, text: "Entertainment" },
    { icon: Wifi, text: "Free WiFi" }
  ];

  return (
    <section id="rooms" className="py-20 bg-muted" data-testid="rooms-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-testid="rooms-header">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4" data-testid="rooms-title">
            Stay With Comfort
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="rooms-subtitle">
            Each room is thoughtfully designed to provide comfort while maintaining our connection to nature.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" data-testid="rooms-grid">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`room-card-${room.id}`}
            >
              <img 
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
                data-testid={`room-image-${room.id}`}
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2" data-testid={`room-title-${room.id}`}>
                  {room.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`room-description-${room.id}`}>
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2" data-testid={`room-amenities-${room.id}`}>
                  {room.amenities.map((amenity, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-accent rounded-full text-sm flex items-center"
                      data-testid={`amenity-${room.id}-${index}`}
                    >
                      <amenity.icon className="w-3 h-3 mr-1" />
                      {amenity.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-card rounded-2xl p-8" data-testid="shared-amenities">
          <h3 className="font-heading font-bold text-2xl text-center mb-8" data-testid="shared-amenities-title">
            Shared Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" data-testid="shared-amenities-grid">
            {sharedAmenities.map((amenity, index) => (
              <div 
                key={index}
                className="text-center"
                data-testid={`shared-amenity-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
