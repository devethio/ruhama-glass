import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photoLibrary } from "@/lib/photos";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative min-h-screen grid lg:grid-cols-2 items-center overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] border border-accent/5 rounded-full"
        />
      </div>

      {/* Left Side - Image with Parallax */}
      <motion.div 
        className="relative h-[50vh] lg:h-screen order-2 lg:order-1"
        style={{ opacity }}
      >
        <motion.div 
          style={{ y: imageY, scale: imageScale }} 
          className="absolute inset-0"
        >
          <img
            src={photoLibrary.hero}
            alt="Premium glass craftsmanship"
            className="w-full h-[130%] object-cover"
          />
        </motion.div>
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent lg:from-transparent lg:via-background/30 lg:to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Shimmer Effect */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />

        {/* Floating Badge on Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-foreground font-semibold">Premium Quality</p>
                <p className="text-muted-foreground text-sm">Certified Excellence</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 px-6 py-20 lg:py-32 lg:px-16 order-1 lg:order-2"
      >
        <div className="max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              17+ Years of Excellence
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            <span className="block">Innovative</span>
            <span className="block text-primary relative">
              Manufacturing
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full" 
                height="12" 
                viewBox="0 0 300 12" 
                fill="none"
              >
                <motion.path 
                  d="M2 8C80 2 220 2 298 8" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="text-primary/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </motion.svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
          >
            We use cutting-edge technology to produce high-quality glass solutions for all industries. Transform your space with premium craftsmanship and precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-glow hover:shadow-glass-lg transition-all group"
              asChild
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/40 hover:bg-secondary hover:border-border text-foreground px-8 py-6 text-base group"
              asChild
            >
              <Link to="/projects">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Play className="h-4 w-4 text-primary fill-primary" />
                </motion.div>
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40"
          >
            {[
              { value: "17+", label: "Years Experience" },
              { value: "500+", label: "Projects Done" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-default"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
