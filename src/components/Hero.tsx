import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-accent/10 rounded-full blur-2xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-primary/15 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text">
              Priyaa Ravi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              AI & Data Science Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about leveraging artificial intelligence and data science to solve real-world problems. 
              Currently pursuing B.Tech in AI & Data Science with hands-on experience in web development and machine learning.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:glow-effect transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="icon"
            className="animate-bounce hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;