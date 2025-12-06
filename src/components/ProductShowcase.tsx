import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Maximize2 } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";
import { photoLibrary } from "@/lib/photos";

const products = {
  mirrors: {
    title: "Custom Mirrors",
    description: "Precision-crafted mirrors designed to transform any space with elegance and functionality.",
    images: [photoLibrary.mirror, photoLibrary.detail, photoLibrary.lobby],
    specifications: [
      { label: "Thickness Options", value: "3mm - 12mm" },
      { label: "Edge Finishing", value: "Beveled, Polished, Flat" },
      { label: "Coating Types", value: "Silver, Copper-free, Antique" },
      { label: "Max Dimensions", value: "3000mm x 2400mm" },
    ],
    features: [
      "Anti-fog coating available",
      "LED backlight integration",
      "Custom shapes and sizes",
      "Frameless or framed options",
      "UV-resistant coating",
    ],
  },
  showerEnclosures: {
    title: "Shower Enclosures",
    description: "Elegant frameless and semi-frameless shower solutions combining safety with stunning design.",
    images: [photoLibrary.showerA, photoLibrary.showerB, photoLibrary.detail],
    specifications: [
      { label: "Glass Thickness", value: "8mm - 12mm Tempered" },
      { label: "Hardware Finish", value: "Chrome, Brushed Nickel, Matte Black" },
      { label: "Door Types", value: "Pivot, Sliding, Hinged" },
      { label: "Safety Standard", value: "EN 12150 Certified" },
    ],
    features: [
      "Easy-clean nano coating",
      "Soft-close mechanisms",
      "Custom configurations",
      "Waterproof seals included",
      "10-year warranty",
    ],
  },
  architectural: {
    title: "Architectural Glass",
    description: "Large-scale glass solutions for modern architecture, from curtain walls to structural glazing.",
    images: [photoLibrary.facade, photoLibrary.storefront, photoLibrary.chebera],
    specifications: [
      { label: "Glass Types", value: "Tempered, Laminated, Insulated" },
      { label: "Solar Control", value: "Low-E, Tinted, Reflective" },
      { label: "Structural Capacity", value: "Point-fixed, Spider Systems" },
      { label: "Acoustic Rating", value: "Up to STC 45" },
    ],
    features: [
      "Energy-efficient glazing",
      "Hurricane-rated options",
      "Bomb-blast resistant",
      "Bird-safe patterns available",
      "LEED certification support",
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<keyof typeof products>("mirrors");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const product = products[selectedProduct];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Premium Glass Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our comprehensive range of high-quality glass products designed for residential and commercial applications.
          </p>
        </motion.div>

        <Tabs
          value={selectedProduct}
          onValueChange={(v) => setSelectedProduct(v as keyof typeof products)}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12 bg-card border border-border">
              <TabsTrigger value="mirrors" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Mirrors
              </TabsTrigger>
              <TabsTrigger value="showerEnclosures" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Shower Glass
              </TabsTrigger>
              <TabsTrigger value="architectural" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Architectural
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {Object.entries(products).map(([key, prod]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Image Gallery */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <div
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(0)}
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-glass-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                          <Maximize2 className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {prod.images.slice(0, 3).map((img, idx) => (
                        <div
                          key={idx}
                          className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                          onClick={() => openLightbox(idx)}
                        >
                          <img
                            src={img}
                            alt={`${prod.title} ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Product Details */}
                  <motion.div variants={itemVariants} className="space-y-8">
                    <div>
                      <Badge variant="secondary" className="mb-4">Premium Quality</Badge>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {prod.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="glass-card p-6 rounded-2xl">
                      <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                        Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {prod.specifications.map((spec) => (
                          <div key={spec.label} className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">
                              {spec.label}
                            </p>
                            <p className="text-foreground font-medium">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {prod.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>

      <ImageLightbox
        images={product.images}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </section>
  );
};
