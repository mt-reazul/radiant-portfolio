import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "reazulislam732@gmail.com",
      href: "mailto:reazulislam732@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1641-696822",
      href: "tel:+8801641696822",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Adarsha Sadar, Cumilla, Chittagong, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full gradient-glow opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in discussing opportunities, collaborations, or just want 
            to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-heading font-semibold text-foreground text-2xl">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 p-4 rounded-xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-muted-foreground mb-4">Follow me on:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <Linkedin className="text-foreground" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <Facebook className="text-foreground" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Form */}
          <div className="gradient-card rounded-2xl p-2 border border-border/50 overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfFQz2cJ2V4uD9_v5G1J4L6Kf4dPq3z7V8yN5tR2xB3mW0A/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-xl"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
