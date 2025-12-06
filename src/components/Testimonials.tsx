import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photoLibrary } from "@/lib/photos";

const testimonials = [
  {
    id: 1,
    name: "Daniel Alemayehu",
    role: "Facilities Manager",
    company: "Sheger City Development",
    image: photoLibrary.sheger,
    rating: 5,
    text: "Ruhama Glass transformed our headquarters with stunning architectural glass installations. Their attention to detail and professional approach exceeded all expectations. The team delivered on time and the quality is exceptional.",
    project: "Sheger City Head Office",
  },
  {
    id: 2,
    name: "Sara Bekele",
    role: "Interior Designer",
    company: "Temer Real Estate",
    image: photoLibrary.temer,
    rating: 5,
    text: "Working with Ruhama Glass has been an absolute pleasure. Their custom mirror solutions added tremendous value to our luxury properties. The craftsmanship and installation quality are truly world-class.",
    project: "Temer Real Estate Project",
  },
  {
    id: 3,
    name: "Michael Tadesse",
    role: "Hotel Manager",
    company: "Chebera Churchura Lodge",
    image: photoLibrary.chebera,
    rating: 5,
    text: "The artistic glasswork and shower enclosures Ruhama Glass created for our lodge have become a talking point among our guests. Their expertise in hospitality glass solutions is unmatched in Ethiopia.",
    project: "Chebera Churchura Lodge",
  },
  {
    id: 4,
    name: "Helen Worku",
    role: "Operations Director",
    company: "Maraki Co-Working",
    image: photoLibrary.maraki,
    rating: 5,
    text: "Ruhama Glass understood exactly what we needed for our modern co-working space. The glass partitions create beautiful divisions while maintaining an open, collaborative atmosphere. Highly recommended!",
    project: "Maraki Co-Working Space",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by leading businesses and organizations across Ethiopia for premium glass solutions.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.project}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-xl">
                  <p className="text-sm font-medium text-foreground">{testimonial.project}</p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-16 w-16 text-primary/10" />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
