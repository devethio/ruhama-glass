import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { CheckCircle2, Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "We are committed to delivering the highest standard of craftsmanship in every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creativity and cutting-edge ideas to provide glass solutions that meet evolving needs.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "We prioritize the needs of our clients, aiming to exceed expectations with every project.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability in every interaction.",
  },
];

const whyChooseUs = [
  "End-to-End Service: From design consultation to installation",
  "Custom Solutions: Products tailored to your specific needs",
  "Modern and Elegant Mirrors: Precision-crafted designs",
  "Expert Craftsmanship: Highest standards of quality",
  "Commitment to Innovation: Latest techniques and trends",
];

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Who We Are
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              At Ruhama Glass, we believe that every space has the potential to inspire. With over 17 years of experience, we have established ourselves as a leading provider of premium glass solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Crafting Excellence Since 2007
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We specialize in crafting mirrors of various sizes, offering modern and elegant designs that enhance both residential and commercial spaces. Our mirrors are tailored to complement any décor, adding a touch of sophistication and style to interiors.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We pride ourselves on delivering personalized service, working closely with homeowners, architects, designers, and builders to bring their visions to life. From design to installation, we offer a comprehensive range of services, ensuring a seamless and stress-free experience for our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project—no matter the size—is handled with the utmost care and professionalism.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, custom glass solutions that bring beauty and functionality to every space, through high-quality craftsmanship, tailored design, and exceptional customer service.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where Ruhama Glass is the leading name in the glass industry, known for pushing the boundaries of design and innovation, transforming how glass is used in modern architecture and interior design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Core Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our values shape our culture and guide our approach to every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-glass transition-all duration-300 hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                The Ruhama Difference
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Ruhama Glass, we don't just sell glass—we create solutions that inspire and enhance the spaces where people live and work.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground italic mb-6">
                  "Shaping spaces with innovation and craftsmanship."
                </blockquote>
                <p className="text-primary font-semibold">— Our Motto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default AboutPage;
