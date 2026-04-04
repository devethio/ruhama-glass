import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { buildBreadcrumbJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo";

const locations = [
  {
    id: "showroom",
    title: "Ruhama Glass Showroom",
    subtitle: "Bole Road, Addis Ababa, Ethiopia",
    embedSrc: "https://www.google.com/maps?q=9.0054,38.7636&z=16&output=embed",
    directionsHref: "https://maps.google.com/?q=9.0054,38.7636",
  },
  {
    id: "workshop",
    title: "Ruhama Glass Workshop",
    subtitle: "Workshop location, Addis Ababa, Ethiopia",
    embedSrc: "https://www.google.com/maps?q=9.004380,38.779761&z=16&output=embed",
    directionsHref: "https://maps.google.com/?q=9.004380,38.779761",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Addis Ababa, Ethiopia", "Near Bole Road"],
    color: "from-[#1274B8] to-[#0E77C3]",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+251 966 494 949", "+251 966 595 959", "+251 115 576 895"],
    color: "from-[#0E77C3] to-[#447CA4]",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@ruhamaglass.com"],
    color: "from-[#447CA4] to-[#1274B8]",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    color: "from-slate-600 to-[#447CA4]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Contact Ruhama Glass"
        description="Contact Ruhama Glass for quotes, consultations, showroom visits, and workshop directions in Addis Ababa, Ethiopia."
        keywords="contact Ruhama Glass, glass showroom Addis Ababa, glass workshop Addis Ababa, glass quote Ethiopia"
        path="/contact"
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          buildLocalBusinessJsonLd(),
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative page-top-offset page-hero pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="page-hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="eyebrow-line text-sky-200">Contact Us</span>
              <h1 className="mt-5 mb-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Let’s plan your next
                <span className="block text-sky-200">glass project with clarity</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                Visit the showroom, find the workshop, or send your project details directly to our team for a consultation and quote.
              </p>
            </motion.div>

            <div className="phi-panel p-6 text-white md:p-7">
              <p className="phi-kicker mb-4 text-sky-200">Reach Us</p>
              <div className="grid gap-4">
                <div>
                  <p className="font-display text-3xl">Showroom + Workshop</p>
                  <p className="mt-1 text-sm text-white/75">Two locations in Addis Ababa for consultation and production support.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="soft-tag border-white/10 bg-white/10 text-white">Free consultation</span>
                  <span className="soft-tag border-white/10 bg-white/10 text-white">Quick quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group premium-card relative p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="section-intro mb-8">
                <span className="eyebrow-line text-primary">Visit Our Locations</span>
                <h2 className="mt-5 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  Showroom and workshop, clearly separated
                </h2>
                <p>
                  Use the maps below to plan a visit, get directions, or decide whether you need to stop by the showroom or the workshop.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {locations.map((location) => (
                  <div key={location.id} className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 blur-xl opacity-50" />
                    <div className="premium-card relative overflow-hidden rounded-2xl shadow-2xl">
                      <div className="aspect-[4/5] w-full">
                        <iframe
                          src={location.embedSrc}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={location.title}
                          className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-md">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">{location.title}</h4>
                            <p className="mt-1 text-xs text-muted-foreground">{location.subtitle}</p>
                            <a
                              href={location.directionsHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                            >
                              Get Directions <ArrowRight className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <a 
                  href="tel:+251966494949"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call Now</p>
                    <p className="text-sm font-medium text-foreground">+251 966 494 949</p>
                  </div>
                </a>
                <a 
                  href="mailto:info@ruhamaglass.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email Us</p>
                    <p className="text-sm font-medium text-foreground">info@ruhamaglass.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="section-intro mb-8">
                <span className="eyebrow-line text-primary">Send a Request</span>
                <h2 className="mt-5 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  Tell us what you need
                </h2>
                <p>
                  Share the scope, dimensions, and type of glass work you need. Our team will follow up with the right next step.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl blur-2xl opacity-50" />
                <div className="premium-card relative p-8 md:p-10 shadow-xl">
                  <div className="mb-8">
                    <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                      <Send className="h-4 w-4" />
                      Send a Message
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Get Your Free Quote
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12 border-border/50 bg-background/50 transition-colors focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12 border-border/50 bg-background/50 transition-colors focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+251 966 494 949"
                          className="h-12 border-border/50 bg-background/50 transition-colors focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                          Subject <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                          className="h-12 border-border/50 bg-background/50 transition-colors focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, dimensions, glass type preferences..."
                        rows={5}
                        required
                        className="resize-none border-border/50 bg-background/50 transition-colors focus:border-primary"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-medium h-14 text-base group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
