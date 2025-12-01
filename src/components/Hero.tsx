import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glass.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen grid lg:grid-cols-2 items-center overflow-hidden bg-background">
      {/* Left Side - Image */}
      <div className="relative h-[50vh] lg:h-screen order-2 lg:order-1">
        <img
          src={heroImage}
          alt="Premium glass craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent lg:from-transparent lg:to-background/80" />
      </div>

      {/* Right Side - Content */}
      <div className="relative z-10 px-6 py-20 lg:py-32 lg:px-16 order-1 lg:order-2">
        <div className="max-w-2xl lg:max-w-none">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              17+ Years of Excellence
            </span>
          </div>
          
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Innovative Manufacturing
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            We use cutting-edge technology to produce high-quality glass solutions for all industries. Transform your space with premium craftsmanship and precision.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-glow hover:shadow-glass-lg transition-all"
              asChild
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/40 hover:bg-secondary hover:border-border text-foreground px-8 py-6 text-base"
              asChild
            >
              <Link to="/projects">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">17+</p>
              <p className="text-muted-foreground text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">500+</p>
              <p className="text-muted-foreground text-sm">Projects Done</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">100%</p>
              <p className="text-muted-foreground text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
