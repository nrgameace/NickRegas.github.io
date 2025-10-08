import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@university.edu",
      text: "your.email@university.edu",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      text: "linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      text: "github.com/yourusername",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-secondary border-border ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-secondary border-border ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`bg-secondary border-border resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Location</h3>
              <p className="text-muted-foreground">
                [University Name]<br />
                [City, State]<br />
                United States
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
