import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Award, Users, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { text: "Quality craftsmanship in every project", icon: Award },
  { text: "Innovative glass solutions", icon: Building2 },
  { text: "Customer satisfaction priority", icon: Users },
  { text: "End-to-end service delivery", icon: Clock },
];

const stats = [
  { number: "17+", label: "Years Experience", suffix: "" },
  { number: "500+", label: "Projects Completed", suffix: "" },
  { number: "50+", label: "Expert Craftsmen", suffix: "" },
  { number: "100%", label: "Client Satisfaction", suffix: "" },
];

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <motion.div 
          style={{ rotate }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Grid with Parallax */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main Large Image */}
              <motion.div 
                style={{ y: y1 }} 
                className="col-span-7 row-span-2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] group"
                >
                  <img
                    src="/photos/_DSC5580 .jpg"
                    alt="Ruhama Glass craftsmanship"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-primary-foreground/90 text-sm font-medium bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      Expert Craftsmanship
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Side Images */}
              <motion.div style={{ y: y2 }} className="col-span-5 space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-xl h-48 group"
                >
                  <img
                    src="/photos/_DSC5697 .jpg"
                    alt="Glass installation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-xl h-48 group"
                >
                  <img
                    src="/photos/_DSC6423.jpg"
                    alt="Premium mirrors"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-border/50 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">17+</p>
                  <p className="text-muted-foreground text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About Ruhama Glass
            </motion.span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Elevating Spaces Through{" "}
              <span className="text-primary relative">
                Premium Glass
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Ruhama Glass, we believe that every space has the potential to inspire. With over 17 years of experience, we have established ourselves as Ethiopia's leading provider of premium glass solutions.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              We specialize in crafting mirrors of various sizes, offering modern and elegant designs that enhance both residential and commercial spaces. Our products are designed to elevate the aesthetics and functionality of any environment.
            </p>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{value.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <Button size="lg" className="font-medium group" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
