import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-card border-border text-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a comprehensive overview of my education, experience, projects, and technical skills in PDF format.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-lg px-8"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download size={20} className="mr-2" />
              Download Resume (PDF)
            </a>
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
