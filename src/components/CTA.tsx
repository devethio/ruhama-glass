import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card border-y border-border/40">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
          Start Your Project Today
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Transform Your Space with Premium Glass?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact us today for a free consultation and discover how Ruhama Glass can bring your vision to life with expert craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-glow"
            asChild
          >
            <Link to="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/40 hover:bg-secondary text-foreground px-8 py-6 text-base"
            asChild
          >
            <a href="tel:+251911000000">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
