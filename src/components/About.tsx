import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  "Quality craftsmanship in every project",
  "Innovative glass solutions",
  "Customer satisfaction priority",
  "End-to-end service delivery",
];

export const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-glass h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="w-full h-full gradient-primary opacity-80" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft h-64 bg-secondary">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-primary/20">17+</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-soft h-64 bg-secondary">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-primary/20">500+</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-glass h-48 bg-gradient-to-br from-accent/20 to-primary/20">
                  <div className="w-full h-full gradient-dark opacity-80" />
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-glass-lg p-6 hidden lg:block">
              <p className="font-display text-4xl font-bold text-primary">17+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Ruhama Glass
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Elevating Spaces Through Premium Glass
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Ruhama Glass, we believe that every space has the potential to inspire. With over 17 years of experience, we have established ourselves as a leading provider of premium glass solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in crafting mirrors of various sizes, offering modern and elegant designs that enhance both residential and commercial spaces. Our products are designed to elevate the aesthetics and functionality of any environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="font-medium" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
