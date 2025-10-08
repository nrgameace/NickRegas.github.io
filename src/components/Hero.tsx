import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide uppercase">
              Student Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Electrical & Financial Engineering Student
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of technology, finance, and innovation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-lg px-8"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  );
};

export default Hero;
