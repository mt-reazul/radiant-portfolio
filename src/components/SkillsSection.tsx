import { 
  BookOpen, 
  FileSpreadsheet, 
  Code, 
  Users, 
  Scan, 
  Radiation, 
  FlaskConical,
  GraduationCap,
  Monitor,
  Wrench,
  Briefcase,
  Heart,
  Languages,
  Globe,
  Sparkles,
  Palette,
  Video
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
    { icon: FileSpreadsheet, name: "Microsoft Office", description: "Word, Excel, PowerPoint & more" },
    { icon: Globe, name: "Google Workspace", description: "Docs, Sheets, Drive & collaboration tools" },
    { icon: Monitor, name: "Data Entry", description: "Accurate and efficient data management" },
    { icon: Code, name: "Web Development", description: "Building websites and web applications" },
    { icon: Wrench, name: "Computer Troubleshooting", description: "Hardware & software problem solving" },
    { icon: Sparkles, name: "AI Prompting & Tools", description: "Utilizing AI tools effectively" },
    { icon: Palette, name: "Basic Graphic Design", description: "Creating visual content & designs" },
    { icon: Video, name: "Video Editing", description: "Editing and producing video content" },
  ];

  const softSkills = [
    { icon: Users, name: "Team Management", description: "Leadership and collaboration" },
    { icon: Heart, name: "Work Ethic", description: "Dedicated and reliable professional" },
    { icon: Briefcase, name: "Project Management", description: "Planning and execution skills" },
  ];

  const languages = [
    { name: "Bangla", level: "Native", percentage: 100 },
    { name: "English", level: "Fluent", percentage: 85 },
    { name: "Hindi", level: "Conversational", percentage: 70 },
    { name: "Urdu", level: "Conversational", percentage: 65 },
    { name: "Turkish", level: "Basic", percentage: 25 },
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
            diagnostic imaging, technology, and professional development.
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

        {/* Computer Skills */}
        <div className="mb-16">
          <h3 className="font-heading font-semibold text-foreground text-2xl mb-8 text-center">
            <Monitor className="inline-block mr-3 text-primary" size={28} />
            Computer Skills
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

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="font-heading font-semibold text-foreground text-2xl mb-8 text-center">
            <Users className="inline-block mr-3 text-primary" size={28} />
            Soft Skills
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-lg mb-1">
                  {skill.name}
                </h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-heading font-semibold text-foreground text-2xl mb-8 text-center">
            <Languages className="inline-block mr-3 text-primary" size={28} />
            Languages
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="gradient-card rounded-2xl p-8 border border-border/50">
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-semibold text-foreground">{lang.name}</span>
                      <span className="text-muted-foreground text-sm">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
