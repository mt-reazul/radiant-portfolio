import { Scan, Radiation, FlaskConical, Shield, Users, Brain } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    {
      icon: Scan,
      name: "General X-Ray",
      description: "Proficient in conventional radiographic techniques and positioning",
      level: 85,
    },
    {
      icon: Radiation,
      name: "CT Scan",
      description: "Experienced in computed tomography imaging procedures",
      level: 75,
    },
    {
      icon: FlaskConical,
      name: "Contrast Radiography",
      description: "Skilled in contrast-enhanced imaging procedures",
      level: 70,
    },
    {
      icon: Shield,
      name: "Radiation Safety",
      description: "Knowledge of radiation protection and safety protocols",
      level: 90,
    },
  ];

  const softSkills = [
    { icon: Users, name: "Patient Care", description: "Compassionate and professional patient interaction" },
    { icon: Brain, name: "Anatomy Knowledge", description: "Strong understanding of human anatomy and pathology" },
  ];

  return (
    <section id="skills" className="py-24 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipped with comprehensive knowledge and practical skills in 
            diagnostic imaging and radiographic procedures.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technicalSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground text-xl mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {skill.description}
                  </p>
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 gradient-teal rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-primary text-sm font-medium mt-2">{skill.level}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-xl mb-2">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
