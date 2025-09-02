export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center" data-testid="contact-header">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4" data-testid="contact-title">
            Experience Sihaya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            A serene escape surrounded by nature, where comfort meets tranquility.
          </p>
        </div>
      </div>
    </section>
  );
}
