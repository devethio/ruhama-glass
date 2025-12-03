import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  "Quality craftsmanship in every project",
  "Innovative glass solutions",
  "Customer satisfaction priority",
  "End-to-end service delivery",
];

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid with Parallax */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div style={{ y: y1 }} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-glass h-48 bg-gradient-to-br from-primary/20 to-accent/20"
                >
                  <div className="w-full h-full gradient-primary opacity-80" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-soft h-64 bg-secondary"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-primary/20">17+</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div style={{ y: y2 }} className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-soft h-64 bg-secondary"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-primary/20">500+</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-glass h-48 bg-gradient-to-br from-accent/20 to-primary/20"
                >
                  <div className="w-full h-full gradient-dark opacity-80" />
                </motion.div>
              </motion.div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-glass-lg p-6 hidden lg:block"
            >
              <p className="font-display text-4xl font-bold text-primary">17+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            <Button size="lg" className="font-medium" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
