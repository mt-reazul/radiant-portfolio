import { Button } from "@/components/ui/button";
import { ArrowDown, Stethoscope, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-glow animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating Medical Icons */}
      <div className="absolute top-20 right-20 text-primary/20 animate-float">
        <Stethoscope size={60} />
      </div>
      <div className="absolute bottom-32 left-20 text-primary/15 animate-float" style={{ animationDelay: "2s" }}>
        <Activity size={50} />
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase animate-slide-up">
                Medical Technologist
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Hi, I'm{" "}
                <span className="text-gradient">Nayeem</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Radiographer & Diagnostic Imaging Specialist
              </p>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Final year student at Institute of Health Technology, Sylhet. 
              Passionate about diagnostic imaging and patient care, with hands-on 
              experience in X-ray, CT Scan, and Contrast radiography.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl">
                Get In Touch
              </Button>
              <Button variant="outline" size="xl">
                View Experience
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Years of Study</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Cases Observed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Modalities</p>
              </div>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 gradient-teal rounded-full blur-3xl opacity-30 scale-90" />
              
              {/* Profile circle */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full gradient-card border-2 border-primary/30 flex items-center justify-center shadow-elevated overflow-hidden">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <Stethoscope size={48} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-heading font-semibold text-foreground">Nayeem</p>
                    <p className="text-sm text-muted-foreground">Radiographer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-card">
                <p className="text-xs text-muted-foreground">Currently at</p>
                <p className="text-sm font-semibold text-foreground">IHT Sylhet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
