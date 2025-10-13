import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

interface ContactInfo {
  address: string;
  city: string;
  email: string;
  phone?: string;
  linkedin?: string;
  youtube?: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contact}
Organization: ${formData.organization}

Message:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:drsnk730@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 bg-muted/30" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-contact-heading">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="input-name"
              />
              <Input
                type="email"
                placeholder="Your email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                data-testid="input-email"
              />
              <Input
                placeholder="Your contact number *"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
                data-testid="input-contact"
              />
              <Input
                placeholder="Your organization name *"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                required
                data-testid="input-organization"
              />
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                data-testid="input-message"
              />
              <Button type="submit" className="w-full" data-testid="button-send">
                Send
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex gap-4" data-testid="contact-address">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">{contactInfo.address}</p>
                    <p className="text-muted-foreground text-sm">{contactInfo.city}</p>
                  </div>
                </div>
                <div className="flex gap-4" data-testid="contact-email">
                  <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary text-sm hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                {contactInfo.phone && (
                  <div className="flex gap-4" data-testid="contact-phone">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">{contactInfo.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-3">
                {contactInfo.linkedin && (
                  <Button variant="outline" size="icon" asChild data-testid="button-linkedin-contact">
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {contactInfo.youtube && (
                  <Button variant="outline" size="icon" asChild data-testid="button-youtube-contact">
                    <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
