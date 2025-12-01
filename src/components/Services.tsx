import { Link } from "react-router-dom";
import { Scissors, Square, Home, Palette, Building2, Armchair, Frame, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Glass Cutting & Shaping",
    description: "Custom glass cutting, beveled edges, tempered and laminated glass production for any application.",
  },
  {
    icon: Square,
    title: "Mirror Work",
    description: "Custom mirror design, polished edges, professional mounting, and antique mirror replication.",
  },
  {
    icon: Home,
    title: "Glass Installation",
    description: "Windows, doors, partitions, shower enclosures, balustrades, and railings installation.",
  },
  {
    icon: Palette,
    title: "Decorative Glass",
    description: "Etched, frosted, and stained glass for privacy, décor, and artistic applications.",
  },
  {
    icon: Building2,
    title: "Architectural Glass",
    description: "Large-scale glass solutions for commercial and residential architectural projects.",
  },
  {
    icon: Armchair,
    title: "Glass Furniture",
    description: "Custom glass tabletops, shelving, and display cases for homes and businesses.",
  },
  {
    icon: Frame,
    title: "Framing Services",
    description: "Mirror and picture framing to enhance style and protect your treasured pieces.",
  },
  {
    icon: Shield,
    title: "Security Glass",
    description: "Bulletproof and security glass for high-risk environments and protection.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Premium Glass Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive glass services designed to meet all your residential and commercial needs with precision and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glass transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-medium" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
