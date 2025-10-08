import { Code, Cpu, TrendingUp, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "C++", "JavaScript/TypeScript", "Java", "MATLAB", "R", "SQL", "Verilog"],
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      skills: ["React", "Node.js", "TensorFlow", "PyTorch", "Git", "Docker", "AWS", "Arduino"],
    },
    {
      icon: Cpu,
      title: "Hardware & Systems",
      skills: ["Circuit Design", "PCB Design", "FPGA", "Embedded Systems", "Microcontrollers", "Signal Processing"],
    },
    {
      icon: TrendingUp,
      title: "Finance & Analytics",
      skills: ["Financial Modeling", "Portfolio Analysis", "Quantitative Analysis", "Risk Management", "Excel", "Bloomberg Terminal"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse skill set spanning software development, hardware engineering, and financial analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
