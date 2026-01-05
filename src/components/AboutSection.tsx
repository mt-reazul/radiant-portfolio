import { GraduationCap, Hospital, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Final year Diploma in Medical Technology at IHT Sylhet",
    },
    {
      icon: Hospital,
      title: "Internship",
      description: "Shaheed Suhrawardy Medical College and Hospital, Dhaka",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Diagnostic Imaging & Radiographic Techniques",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Quality patient care through accurate imaging",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Passionate About <span className="text-gradient">Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dedicated Medical Technology student with a strong foundation in 
            diagnostic imaging and a commitment to delivering quality healthcare services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am currently pursuing my Diploma in Medical Technology (Radiography) 
              at the Institute of Health Technology, Sylhet, and I'm in my final year 
              of studies. My journey in medical imaging has been both challenging and 
              rewarding, fueling my passion for diagnostic healthcare.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              During my internship at Shaheed Suhrawardy Medical College and Hospital, 
              I gained valuable hands-on experience in various imaging modalities 
              including General X-ray, CT Scan, and Contrast X-ray procedures. This 
              experience has strengthened my technical skills and patient care abilities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe that accurate diagnostic imaging plays a crucial role in 
              patient care, and I am committed to contributing to this vital field 
              with dedication, precision, and compassion.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
