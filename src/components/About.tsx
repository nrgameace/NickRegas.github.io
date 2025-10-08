import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      description: "Double major in Electrical Engineering and Financial Engineering with a minor in Computer Science",
    },
    {
      icon: Lightbulb,
      title: "Interests",
      description: "Passionate about combining hardware engineering, financial systems, and software development",
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Aiming to bridge technology and finance, working on innovative solutions in fintech or tech-driven industries",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate engineering student at [University Name], pursuing a unique combination of disciplines
              that allow me to work at the intersection of technology and finance. My academic journey has equipped me
              with a diverse skill set spanning circuit design, financial modeling, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card rounded-xl border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond academics, I'm actively involved in [student organizations, research projects, or extracurriculars].
              I believe in continuous learning and enjoy tackling complex problems that require interdisciplinary thinking.
              Whether it's designing embedded systems, analyzing financial markets, or building web applications, I'm always
              eager to take on new challenges and expand my expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
