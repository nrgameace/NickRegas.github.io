import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-destructive fill-destructive" /> by [Your Name]
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
