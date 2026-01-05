import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-heading text-xl font-bold text-gradient">
            Nayeem
          </a>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-primary" /> 
            © {new Date().getFullYear()} All rights reserved
          </p>

          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
