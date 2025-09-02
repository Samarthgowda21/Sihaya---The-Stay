import { Snowflake, Fan, Bath, Waves, Flame, Utensils, Sofa, Car } from "lucide-react";
import roomImage from "@/assets/room1.png";

export default function RoomsSection() {
  const rooms = [
    {
      id: 1,
      image: roomImage,
      title: "Deluxe Room",
      description: "AC, Fan, Private Bath",
      amenities: [
        { icon: Snowflake, text: "AC" },
        { icon: Fan, text: "Fan" },
        { icon: Bath, text: "Private Bath" }
      ]
    },
    {
      id: 2,
      image: roomImage,
      title: "Garden View Room",
      description: "AC, Fan, Private Bath",
      amenities: [
        { icon: Snowflake, text: "AC" },
        { icon: Fan, text: "Fan" },
        { icon: Bath, text: "Private Bath" }
      ]
    },
    {
      id: 3,
      image: roomImage,
      title: "Cozy Room",
      description: "AC, Fan, Private Bath",
      amenities: [
        { icon: Snowflake, text: "AC" },
        { icon: Fan, text: "Fan" },
        { icon: Bath, text: "Private Bath" }
      ]
    },
    {
      id: 4,
      image: roomImage,
      title: "Standard Room",
      description: "AC, Fan, Private Bath",
      amenities: [
        { icon: Snowflake, text: "AC" },
        { icon: Fan, text: "Fan" },
        { icon: Bath, text: "Private Bath" }
      ]
    }
  ];

  const amenities = [
    { icon: Utensils, text: "Kitchen" },
    { icon: Sofa, text: "Common Area" },
    { icon: Car, text: "Parking" },
    { icon: Waves, text: "Swimming Pool" },
    { icon: Waves, text: "Jacuzzi" },
    { icon: Flame, text: "Fire Pit" }
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
        
        <div className="bg-card rounded-2xl p-8" data-testid="amenities">
          <h3 className="font-heading font-bold text-2xl text-center mb-8" data-testid="amenities-title">
            Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" data-testid="amenities-grid">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="text-center"
                data-testid={`amenity-${index}`}
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
