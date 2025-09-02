import room1 from "@/assets/room1.png";
import aerialView from "@/assets/aerial-view.png";
import propertyView from "@/assets/property-view.png";
import exteriorFront from "@/assets/exterior-front.png";
import commonArea from "@/assets/common-area.png";
import firepit from "@/assets/firepit.png";
import exteriorGarden from "@/assets/exterior-garden.png";

export default function GallerySection() {
  const galleryImages = [
    {
      src: aerialView,
      alt: "Aerial view of Sihaya property",
      aspectRatio: "wide"
    },
    {
      src: room1,
      alt: "Deluxe room interior",
      aspectRatio: "square"
    },
    {
      src: propertyView,
      alt: "Property landscape view",
      aspectRatio: "wide"
    },
    {
      src: exteriorFront,
      alt: "Property exterior front view",
      aspectRatio: "square"
    },
    {
      src: commonArea,
      alt: "Common area lounge",
      aspectRatio: "wide"
    },
    {
      src: firepit,
      alt: "Fire pit area at night",
      aspectRatio: "wide"
    },
    {
      src: exteriorGarden,
      alt: "Garden and exterior view",
      aspectRatio: "tall"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-card" data-testid="gallery-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-testid="gallery-header">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4" data-testid="gallery-title">
            Our Space in Pictures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="gallery-subtitle">
            Discover the natural beauty and comfortable spaces that make Sihaya the Stay special.
          </p>
        </div>
        
        <div className="masonry-grid" data-testid="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="masonry-item" data-testid={`gallery-item-${index}`}>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                data-testid={`gallery-image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
