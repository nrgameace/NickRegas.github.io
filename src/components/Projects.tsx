import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Financial Trading Algorithm",
      description: "Developed a machine learning-based trading algorithm that analyzes market trends and executes trades autonomously. Achieved 23% return in backtesting.",
      technologies: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Smart Home IoT System",
      description: "Designed and built an IoT system using ESP32 microcontrollers to monitor and control home appliances remotely via a mobile app.",
      technologies: ["C++", "Arduino", "MQTT", "React Native", "Firebase"],
      github: "https://github.com",
    },
    {
      title: "Portfolio Optimization Dashboard",
      description: "Web application for analyzing and optimizing investment portfolios using Modern Portfolio Theory. Features real-time data visualization.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "FPGA-Based Signal Processor",
      description: "Implemented a digital signal processing system on FPGA for real-time audio filtering and spectrum analysis.",
      technologies: ["Verilog", "FPGA", "MATLAB", "DSP"],
      github: "https://github.com",
    },
    {
      title: "Blockchain Payment System",
      description: "Created a proof-of-concept blockchain-based payment system with smart contracts for secure peer-to-peer transactions.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Hardhat"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "ML-Powered Stock Predictor",
      description: "Built a deep learning model to predict stock price movements using LSTM networks and sentiment analysis from financial news.",
      technologies: ["Python", "Keras", "NLP", "Beautiful Soup", "Flask"],
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my engineering and programming projects showcasing skills across hardware, software, and finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-hover flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
