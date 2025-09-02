export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Garden area",
      aspectRatio: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Common area",
      aspectRatio: "wide"
    },
    {
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Coconut trees",
      aspectRatio: "square"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Kitchen area",
      aspectRatio: "wide"
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Seating area",
      aspectRatio: "square"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Sunset view",
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
