import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SEO } from "@/components/SEO";
import { buildBreadcrumbJsonLd, buildServiceListJsonLd } from "@/lib/seo";
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

const serviceHighlights = ["Custom fabrication", "Site measurement", "Professional installation"];

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Glass Products and Services"
        description="Explore Ruhama Glass services including custom mirrors, shower enclosures, glass cutting, partitions, architectural glazing, decorative glass, and installation in Addis Ababa and Ethiopia."
        keywords="glass services Addis Ababa, custom mirrors Ethiopia, glass installation Addis Ababa, shower glass Ethiopia, architectural glass services"
        path="/services"
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          buildServiceListJsonLd(services.map((service) => service.title)),
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="page-top-offset page-hero pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="page-hero-grid">
            <div className="max-w-3xl">
              <span className="eyebrow-line text-sky-200">Our Services</span>
              <h1 className="mt-5 mb-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Premium glass services for
                <span className="block text-sky-200">homes, workplaces, and projects</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                From fabrication and edging to partitions, mirrors, shower enclosures, and architectural glazing, Ruhama Glass provides end-to-end solutions with precise installation.
              </p>
            </div>

            <div className="phi-panel p-6 text-white md:p-7">
              <p className="phi-kicker mb-4 text-sky-200">Service Focus</p>
              <div className="flex flex-wrap gap-3">
                {serviceHighlights.map((item) => (
                  <span key={item} className="soft-tag border-white/10 bg-white/10 text-white">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-px w-full bg-white/12" />
              <p className="mt-5 text-sm leading-relaxed text-white/75">
                Built for residential renovations, retail interiors, hospitality spaces, and commercial developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-glow py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-intro mb-14">
            <span className="eyebrow-line text-primary">What We Offer</span>
            <h2 className="mt-5 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Specialist fabrication with a cleaner project workflow
            </h2>
            <p>
              Every service line is backed by measurement, finishing, and installation support, so the work feels coordinated from first visit to final fit.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="premium-card p-8 hover:shadow-glass transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
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
                  <span className="soft-tag shrink-0">{service.features.length} features</span>
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
          <div className="text-center mb-16 section-intro mx-auto">
            <span className="eyebrow-line text-primary justify-center">Accessories</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-5 mb-4">
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
                className="premium-card p-6 text-center hover-lift transition-all duration-300"
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
