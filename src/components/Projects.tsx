import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "./ImageLightbox";
import { photoLibrary } from "@/lib/photos";

const projects = [
  {
    title: "Sheger City Head Office",
    category: "Commercial",
    description: "Custom glass solutions, architectural glass installations, and decorative mirrors enhancing the modern aesthetic.",
    image: photoLibrary.sheger,
    span: "md:col-span-2 lg:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    title: "Temer Real Estate",
    category: "Real Estate",
    description: "Tempered glass partitions and custom mirrors transforming properties into sophisticated spaces.",
    image: photoLibrary.temer,
    span: "lg:col-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Chebera Churchura Lodge",
    category: "Hospitality",
    description: "Artistic glasswork and custom shower enclosures elevating the lodge's luxurious ambiance.",
    image: photoLibrary.chebera,
    span: "lg:col-span-3",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Maraki Co-Working Space",
    category: "Commercial",
    description: "Innovative glass partitions and decorative panels fostering a collaborative work environment.",
    image: photoLibrary.maraki,
    span: "lg:col-span-5",
    aspect: "aspect-[16/10]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(206_57%_97%)_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[8%] h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-[6%] h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
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
            <span className="phi-kicker text-primary">Our Portfolio</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A selection of completed work across commercial, hospitality, workplace, and residential environments, delivered with close attention to finish and installation quality.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="phi-panel px-5 py-4">
              <p className="phi-kicker mb-2 text-primary">Selected Work</p>
              <p className="font-display text-2xl text-foreground">Commercial, hospitality, and residential projects</p>
            </div>
            <Button variant="outline" className="font-medium" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/40 bg-card/70 shadow-xl backdrop-blur-sm ${project.span}`}
            >
              <div
                className={`${project.aspect} overflow-hidden cursor-pointer`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-glass-dark via-glass-dark/25 to-transparent opacity-85" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {project.category}
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold text-primary-foreground md:text-2xl">
                  {project.title}
                </h3>
                <p className="max-w-xl text-sm text-primary-foreground/75 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Maximize2 className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ImageLightbox
        images={projects.map((p) => p.image)}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </section>
  );
};
