import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Internship Training",
      organization: "Shaheed Suhrawardy Medical College and Hospital",
      location: "Dhaka, Bangladesh",
      period: "Completed",
      type: "Clinical Training",
      responsibilities: [
        "Assisted in General X-ray imaging procedures",
        "Observed and participated in CT Scan examinations",
        "Gained experience in Contrast X-ray procedures",
        "Learned patient positioning and radiation safety protocols",
        "Collaborated with senior radiographers and radiologists",
      ],
    },
    {
      title: "Diploma in Medical Technology",
      organization: "Institute of Health Technology, Sylhet",
      location: "Sylhet, Bangladesh",
      period: "Final Year (Ongoing)",
      type: "Education",
      responsibilities: [
        "Comprehensive study of radiographic techniques",
        "Anatomy, physiology, and pathology courses",
        "Radiation physics and protection",
        "Medical imaging equipment operation",
        "Clinical practicum and laboratory sessions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic and practical journey in the field of Medical Technology 
            and Diagnostic Radiography.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-border -translate-x-1/2 hidden md:block" />
              )}

              <div className="flex gap-8 mb-12">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 flex-shrink-0 justify-center">
                  <div className="w-4 h-4 rounded-full gradient-teal shadow-glow mt-8" />
                </div>

                {/* Content Card */}
                <div className="flex-1 gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {exp.type}
                      </span>
                      <h3 className="font-heading font-bold text-foreground text-2xl">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building size={18} className="text-primary" />
                      <span>{exp.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
