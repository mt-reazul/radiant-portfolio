import { 
  BookOpen, 
  FileSpreadsheet, 
  Presentation, 
  Code, 
  Video, 
  Users, 
  Scan, 
  Radiation, 
  FlaskConical,
  GraduationCap
} from "lucide-react";

const SkillsSection = () => {
  const academicSubjects = [
    {
      year: "First Year",
      subjects: [
        "Basic Anatomy",
        "Basic Physiology",
        "Community Medicine",
        "Microbiology",
        "English",
        "Physics",
        "Chemistry",
      ],
    },
    {
      year: "Second Year",
      subjects: [
        "Basic Radiological Procedure and Positioning",
        "Photography and Radiation Safety",
        "Radiological Physics",
        "Computer",
        "Radiological Anatomy",
      ],
    },
    {
      year: "Third Year",
      subjects: [
        "18 Week Internship",
        "Advanced Procedure",
        "Basic Radiological Findings",
        "Patient Care",
      ],
    },
  ];

  const technicalSkills = [
    {
      icon: Scan,
      name: "General X-Ray",
      description: "Proficient in conventional radiographic techniques and positioning",
    },
    {
      icon: Radiation,
      name: "CT Scan",
      description: "Experienced in computed tomography imaging procedures",
    },
    {
      icon: FlaskConical,
      name: "Contrast Radiography",
      description: "Skilled in contrast-enhanced imaging procedures",
    },
  ];

  const computerSkills = [
    { icon: FileSpreadsheet, name: "MS Word", description: "Document creation and formatting" },
    { icon: FileSpreadsheet, name: "MS Excel", description: "Data management and analysis" },
    { icon: Presentation, name: "MS PowerPoint", description: "Professional presentations" },
    { icon: Code, name: "Web Development", description: "Building websites and web applications" },
    { icon: Video, name: "Video Editing", description: "Video production and editing" },
    { icon: Users, name: "Team Management", description: "Leadership and collaboration skills" },
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

        {/* Academic Subjects */}
        <div className="mb-16">
          <h3 className="font-heading font-semibold text-foreground text-2xl mb-8 text-center">
            <GraduationCap className="inline-block mr-3 text-primary" size={28} />
            Academic Curriculum
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {academicSubjects.map((yearData) => (
              <div
                key={yearData.year}
                className="gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="font-heading font-semibold text-primary text-lg mb-4">
                  {yearData.year}
                </h4>
                <ul className="space-y-2">
                  {yearData.subjects.map((subject, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Radiography Skills */}
        <div className="mb-16">
          <h3 className="font-heading font-semibold text-foreground text-2xl mb-8 text-center">
            <Radiation className="inline-block mr-3 text-primary" size={28} />
            Radiography Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-xl mb-2">
                  {skill.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Computer & Soft Skills */}
        <div>
          <h3 className="font-heading font-semibold text-foreground text-2xl mb-8 text-center">
            <Code className="inline-block mr-3 text-primary" size={28} />
            Computer & Soft Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {computerSkills.map((skill) => (
              <div
                key={skill.name}
                className="gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-lg">
                    {skill.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
