import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scissors, Square, Home, Palette, Building2, Armchair, Frame, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Glass Cutting & Shaping",
    description: "Custom glass cutting, beveled edges, tempered and laminated glass production for any application.",
    span: "lg:col-span-5",
  },
  {
    icon: Square,
    title: "Mirror Work",
    description: "Custom mirror design, polished edges, professional mounting, and antique mirror replication.",
    span: "lg:col-span-3",
  },
  {
    icon: Home,
    title: "Glass Installation",
    description: "Windows, doors, partitions, shower enclosures, balustrades, and railings installation.",
    span: "lg:col-span-4",
  },
  {
    icon: Palette,
    title: "Decorative Glass",
    description: "Etched, frosted, and stained glass for privacy, décor, and artistic applications.",
    span: "lg:col-span-3",
  },
  {
    icon: Building2,
    title: "Architectural Glass",
    description: "Large-scale glass solutions for commercial and residential architectural projects.",
    span: "lg:col-span-5",
  },
  {
    icon: Armchair,
    title: "Glass Furniture",
    description: "Custom glass tabletops, shelving, and display cases for homes and businesses.",
    span: "lg:col-span-4",
  },
  {
    icon: Frame,
    title: "Framing Services",
    description: "Mirror and picture framing to enhance style and protect your treasured pieces.",
    span: "lg:col-span-3",
  },
  {
    icon: Shield,
    title: "Security Glass",
    description: "Bulletproof and security glass for high-risk environments and protection.",
    span: "lg:col-span-5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Services = () => {
  return (
    <section className="section-glow relative overflow-hidden py-24 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(204_55%_98%)_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-[6%] h-72 w-72 rounded-full bg-accent/35 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-8 lg:grid-cols-[5fr_3fr] lg:items-end"
        >
          <div>
            <span className="phi-kicker text-primary">Our Services</span>
            <h2 className="mt-4 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Complete Glass Services for Homes and Businesses
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We provide fabrication, finishing, installation, and specialty glass work for residential, commercial, and institutional projects with consistent quality from measurement to handover.
            </p>
          </div>

          <div className="phi-panel p-6 md:p-7">
            <p className="phi-kicker mb-3 text-primary">Project Support</p>
            <p className="mb-2 font-display text-2xl text-foreground">From measurement to installation</p>
            <p className="leading-relaxed text-muted-foreground">
              One coordinated team handling site review, fabrication, finishing, and fitting for a smooth project delivery.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group phi-panel p-6 md:p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-glass ${service.span}`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {service.title.split(" ")[0]}
                </span>
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground md:text-2xl">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-border to-transparent" />
              <p className="mt-4 text-sm text-foreground/70">
                Measured for durability, finish, and clean installation.
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="font-medium" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
