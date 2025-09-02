export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { text: "About", href: "about" },
    { text: "Rooms", href: "rooms" },
    { text: "Gallery", href: "gallery" },
    { text: "Location", href: "location" },
    { text: "Contact", href: "contact" }
  ];

  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary">Sihaya</h3>
                <p className="text-xs opacity-80">The Stay</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              A home amidst nature, offering peaceful stays in the heart of our family farm.
            </p>
          </div>
          
          <div data-testid="footer-links">
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="opacity-80 hover:opacity-100 transition-opacity text-left"
                    data-testid={`footer-link-${link.href}`}
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+91 98765 43210</li>
              <li>stay@sihaya.com</li>
              <li>Near Mysore, Karnataka</li>
            </ul>
          </div>
          
          <div data-testid="footer-social">
            <h4 className="font-heading font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <button 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                data-testid="social-instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                data-testid="social-facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-sm opacity-60">
            © 2025 Sihaya the Stay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
