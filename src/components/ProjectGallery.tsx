import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import projectSheger from "@/assets/project-sheger.jpg";
import projectChebera from "@/assets/project-chebera.jpg";
import projectMaraki from "@/assets/project-maraki.jpg";
import projectTemer from "@/assets/project-temer.jpg";

const galleryImages = [
  { src: projectSheger, title: "Sheger City Head Office", category: "Commercial" },
  { src: projectTemer, title: "Temer Real Estate", category: "Real Estate" },
  { src: projectChebera, title: "Chebera Churchura Lodge", category: "Hospitality" },
  { src: projectMaraki, title: "Maraki Co-Working Space", category: "Commercial" },
  { src: projectSheger, title: "Glass Facades", category: "Architectural" },
  { src: projectChebera, title: "Shower Enclosures", category: "Residential" },
];

export const ProjectGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Work in Detail
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse through high-resolution images of our completed projects and see the quality of our craftsmanship.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-glass-dark via-glass-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-1">
                    {image.category}
                  </span>
                  <h3 className="font-display text-sm md:text-lg font-semibold text-primary-foreground">
                    {image.title}
                  </h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                    <Maximize2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <ImageLightbox
        images={galleryImages.map((img) => img.src)}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </section>
  );
};
