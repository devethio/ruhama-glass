import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glass.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern glass architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-glass-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-glass-dark/90 via-glass-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
              17+ Years of Excellence
            </span>
          </div>
          
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Shaping Spaces with{" "}
            <span className="text-accent">Innovation</span> and Craftsmanship
          </h1>
          
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Premium glass solutions that transform your vision into reality. From custom mirrors to architectural installations, we deliver excellence in every project.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity"
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
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 px-8 py-6 text-lg"
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
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">17+</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">100%</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
