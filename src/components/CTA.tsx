import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photoLibrary } from "@/lib/photos";

export const CTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="section-glow phi-shell relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <img
          src={photoLibrary.hero}
          alt=""
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-glass-dark/88" />
      </motion.div>

      {/* Animated glass reflections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/14 bg-[linear-gradient(145deg,hsl(210_52%_12%_/_0.9),hsl(205_86%_16%_/_0.72))] px-6 py-12 text-center shadow-[0_24px_80px_hsla(210,55%,8%,0.42)] backdrop-blur-xl md:px-10 md:py-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100"
          >
            Ready to Transform Your Space?
          </motion.span>
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let's Create Something Beautiful Together
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
            Contact us today for a free consultation and discover how our premium glass solutions can elevate your project to new heights.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white font-medium text-glass-dark hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/10 font-medium text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <a href="tel:+251966494949">
                <Phone className="mr-2 h-4 w-4" />
                +251 966 494 949
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
