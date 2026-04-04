import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, Play, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photoLibrary } from "@/lib/photos";

const heroImages = [
  { src: photoLibrary.hero, alt: "Premium glass showroom" },
  { src: photoLibrary.lobby, alt: "Elegant glass lobby design" },
  { src: photoLibrary.facade, alt: "Modern glass facade" },
  { src: photoLibrary.storefront, alt: "Glass storefront installation" },
  { src: photoLibrary.mirror, alt: "Custom mirror work" },
];

export const Hero = () => {
  const ref = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      ref={ref}
      className="section-glow phi-shell sun-wash relative min-h-screen grid lg:grid-cols-[8fr_5fr] items-center overflow-hidden bg-[linear-gradient(180deg,hsl(204_75%_98%)_0%,hsl(var(--background))_22%,hsl(203_45%_97%)_100%)]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-[8%] w-[600px] h-[600px] bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[540px] h-[540px] bg-accent/35 rounded-full blur-3xl" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[12%] w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-[18%] w-[610px] h-[610px] border border-primary/10 rounded-full"
        />
      </div>

      {/* Left Side - Sliding Image with Parallax */}
      <motion.div 
        className="relative h-[54vh] lg:h-screen order-2 lg:order-1"
        style={{ opacity }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <motion.div 
          style={{ y: imageY, scale: imageScale }} 
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full"
          >
            {heroImages.map((image) => (
              <div key={image.src} className="relative h-full min-w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[130%] object-cover scale-[1.02]"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent lg:from-transparent lg:via-background/15 lg:to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-white/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_28%)]" />
        
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

        {/* Slide Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 flex items-center z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            aria-label="Previous hero slide"
            className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            aria-label="Next hero slide"
            className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 text-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to hero slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-8 bg-primary" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Floating Badge on Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 left-10 hidden lg:block"
        >
          <div className="phi-panel p-5">
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
        className="relative z-10 px-6 py-16 lg:py-28 xl:py-32 lg:pr-16 xl:pr-24 lg:pl-4 order-1 lg:order-2"
      >
        <div className="max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-primary text-sm font-semibold mb-6 backdrop-blur-md">
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
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[5.4rem] font-bold text-foreground leading-[0.98] mb-6"
          >
            <span className="block">Premium</span>
            <span className="block relative">Glass Solutions</span>
            <span className="block text-primary relative">
              for Modern Spaces
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
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
          >
            From custom mirrors and partitions to shower enclosures and architectural glass, Ruhama Glass delivers precise fabrication, reliable installation, and refined finishes for residential and commercial projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="phi-panel mb-10 p-5 md:p-6"
          >
            <p className="phi-kicker text-primary mb-4">What We Deliver</p>
            <div className="grid gap-4 md:grid-cols-[3fr_5fr] md:items-center">
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">Custom fabrication</p>
                <p className="text-sm text-muted-foreground mt-2">Built to match your design, finish, and site requirements.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Mirrors", "Partitions", "Architectural Glass"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

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
            className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-border/40"
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
                className="group cursor-default rounded-2xl border border-white/30 bg-white/45 px-4 py-5 backdrop-blur-md"
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
