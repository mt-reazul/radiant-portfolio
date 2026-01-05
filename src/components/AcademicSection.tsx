import { GraduationCap, BookOpen, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AcademicSection = () => {
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
        "Advanced Procedure",
        "Basic Radiological Findings",
        "Patient Care",
      ],
    },
  ];

  return (
    <section id="academic" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            My Education
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Academic <span className="text-gradient">Curriculum</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="gradient-card rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-xl">
                  Diploma in Medical Technology
                </h3>
                <p className="text-muted-foreground text-sm">
                  3 Year Program Curriculum
                </p>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {academicSubjects.map((yearData, index) => (
                <AccordionItem
                  key={yearData.year}
                  value={`year-${index}`}
                  className="border border-border/50 rounded-xl px-4 data-[state=open]:bg-primary/5 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="font-heading font-semibold text-foreground">
                        {yearData.year}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        ({yearData.subjects.length} subjects)
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                      {yearData.subjects.map((subject, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <BookOpen size={14} className="text-primary flex-shrink-0" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;