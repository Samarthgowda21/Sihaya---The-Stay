import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: ""
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/booking-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookingMutation.mutate(formData);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a stay at Sihaya the Stay. Could you please provide more information?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210"
    },
    {
      icon: Mail,
      title: "Email",
      value: "stay@sihaya.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98765 43210"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-testid="contact-header">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4" data-testid="contact-title">
            Plan Your Stay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to experience the tranquility of Sihaya the Stay? Get in touch with us today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8" data-testid="contact-details">
            <h3 className="font-heading font-bold text-2xl mb-6" data-testid="contact-details-title">
              Contact Details
            </h3>
            
            <div className="space-y-6 mb-8" data-testid="contact-info">
              {contactDetails.map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4"
                  data-testid={`contact-detail-${index}`}
                >
                  <div className={`w-12 h-12 ${contact.icon === MessageCircle ? 'bg-secondary/10' : 'bg-primary/10'} rounded-full flex items-center justify-center`}>
                    <contact.icon className={`w-5 h-5 ${contact.icon === MessageCircle ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  <div>
                    <p className="font-medium">{contact.title}</p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-secondary text-secondary-foreground py-4 text-lg hover:bg-secondary/90"
              data-testid="button-whatsapp-contact"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Chat on WhatsApp
            </Button>
          </div>
          
          <div className="bg-card rounded-2xl p-8" data-testid="booking-form">
            <h3 className="font-heading font-bold text-2xl mb-6" data-testid="booking-form-title">
              Booking Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="booking-form-element">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Input
                    id="checkin"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    data-testid="input-checkin"
                  />
                </div>
                <div>
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Input
                    id="checkout"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    data-testid="input-checkout"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Select value={formData.guests} onValueChange={(value) => setFormData({...formData, guests: value})}>
                  <SelectTrigger data-testid="select-guests">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Any special requests or questions..."
                  rows={4}
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={bookingMutation.isPending}
                className="w-full bg-primary text-primary-foreground py-4 text-lg hover:bg-primary/90"
                data-testid="button-submit-inquiry"
              >
                {bookingMutation.isPending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
