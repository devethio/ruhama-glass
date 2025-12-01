import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { 
  Scissors, Square, Home, Palette, Building2, Armchair, 
  Frame, Shield, Wrench, CircleDot, Sparkles, Box
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Glass Cutting and Shaping",
    description: "Precision cutting and shaping for all your glass needs.",
    features: [
      "Custom Glass Cutting: Windows, doors, tabletops, cabinets, picture frames",
      "Beveled Glass: Smooth, angled finishes for mirrors and decorative panels",
      "Tempered Glass Production: Heat-treated glass for enhanced safety",
      "Laminated Glass: Multi-layer bonding for safety and soundproofing",
    ],
  },
  {
    icon: Square,
    title: "Mirror Work",
    description: "Custom mirrors designed to elevate any space.",
    features: [
      "Custom Mirror Design: Bathrooms, decorative walls, commercial spaces",
      "Mirror Edging: Polished and beveled edges for enhanced aesthetics",
      "Mirror Mounting: Professional installation services",
      "Antique Mirror Replication: Vintage appeal for high-end décor",
    ],
  },
  {
    icon: Home,
    title: "Glass Installation",
    description: "Expert installation services for residential and commercial properties.",
    features: [
      "Window and Door Installation: Custom glass for any property",
      "Glass Partition Installation: Modern office and retail environments",
      "Shower Enclosure Installation: Frameless and framed options",
      "Balustrades and Railings: Sleek, modern finishes",
    ],
  },
  {
    icon: Palette,
    title: "Decorative and Artistic Glass Work",
    description: "Transform spaces with artistic glass creations.",
    features: [
      "Etched or Frosted Glass: Privacy and decorative purposes",
      "Stained Glass: Custom windows and panels for luxury homes",
      "Decorative Panels: Unique designs for any environment",
    ],
  },
  {
    icon: Building2,
    title: "Architectural Glass Services",
    description: "Large-scale solutions for modern architecture.",
    features: [
      "Curtain Walls: Floor-to-ceiling glass installations",
      "Skylights: Natural light solutions",
      "Glass Facades: Contemporary building exteriors",
      "Structural Glass: Load-bearing applications",
    ],
  },
  {
    icon: Armchair,
    title: "Glass Furniture Design and Production",
    description: "Elegant glass furniture for homes and businesses.",
    features: [
      "Glass Tabletops: Dining, coffee, and side tables",
      "Glass Shelving: Custom solutions for homes, shops, and offices",
      "Glass Display Cases: Retail stores, museums, and collectors",
    ],
  },
  {
    icon: Frame,
    title: "Framing Services",
    description: "Professional framing to enhance and protect.",
    features: [
      "Mirror Framing: Custom frames for style and functionality",
      "Picture Framing with Glass: Protect and showcase treasured pieces",
      "Certificate Framing: Professional presentation solutions",
    ],
  },
  {
    icon: Shield,
    title: "Safety and Security Glass",
    description: "Protection solutions for high-risk environments.",
    features: [
      "Bulletproof Glass: Banks and government buildings",
      "Security Glass: Commercial properties",
      "Impact-Resistant Glass: High-security applications",
    ],
  },
];

const accessories = [
  { icon: Wrench, name: "Fittings and Brackets", description: "Chrome, stainless steel, and brass options" },
  { icon: CircleDot, name: "Screws and Fasteners", description: "High-quality hardware for glass installations" },
  { icon: Sparkles, name: "Glass Clamps", description: "Secure mounting solutions" },
  { icon: Box, name: "Door Handles", description: "Modern and classic designs" },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Products & Services
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              At Ruhama Glass, we offer a wide range of high-quality glass solutions designed to meet the needs of both residential and commercial clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-glass transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Accessories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Glass Accessories & Fittings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              To complement our glass products, we provide a range of accessories and fittings to ensure durability, safety, and a polished finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-card border border-border text-center hover-lift transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default ServicesPage;
