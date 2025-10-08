import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Tech Company Inc.",
      period: "Summer 2024",
      description: [
        "Developed full-stack features for a financial analytics platform using React and Node.js",
        "Optimized database queries, reducing response time by 40%",
        "Collaborated with cross-functional teams in an Agile environment",
      ],
    },
    {
      role: "Electrical Engineering Research Assistant",
      company: "University Research Lab",
      period: "Jan 2024 - Present",
      description: [
        "Conducting research on renewable energy systems and power electronics",
        "Designed and tested circuit prototypes for energy-efficient power converters",
        "Co-authored a paper on novel MPPT algorithms for solar panels",
      ],
    },
    {
      role: "Financial Analyst Intern",
      company: "Investment Firm XYZ",
      period: "Summer 2023",
      description: [
        "Performed quantitative analysis on equity portfolios and market trends",
        "Built financial models to evaluate investment opportunities",
        "Automated reporting processes using Python and Excel VBA",
      ],
    },
    {
      role: "President, Engineering Society",
      company: "University Engineering Club",
      period: "Sep 2023 - Present",
      description: [
        "Leading a team of 50+ members in organizing technical workshops and hackathons",
        "Secured $10K in sponsorships for club events and projects",
        "Fostered collaboration between students and industry professionals",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Internships, research positions, and leadership roles that shaped my technical and professional skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
