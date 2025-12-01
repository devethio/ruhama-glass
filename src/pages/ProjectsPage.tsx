import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ExternalLink } from "lucide-react";
import projectSheger from "@/assets/project-sheger.jpg";
import projectChebera from "@/assets/project-chebera.jpg";
import projectMaraki from "@/assets/project-maraki.jpg";
import projectTemer from "@/assets/project-temer.jpg";

const projects = [
  {
    title: "Sheger City Head Office",
    category: "Commercial",
    description: "Delivered custom glass solutions, including architectural glass installations and decorative mirrors, enhancing the office's modern aesthetic and functionality.",
    image: projectSheger,
    services: ["Architectural Glass", "Decorative Mirrors", "Glass Partitions"],
  },
  {
    title: "Temer Real Estate",
    category: "Real Estate",
    description: "Designed and installed tempered glass partitions and custom mirrors, transforming real estate properties into sophisticated, high-value spaces.",
    image: projectTemer,
    services: ["Tempered Glass", "Custom Mirrors", "Glass Partitions"],
  },
  {
    title: "Chebera Churchura Lodge",
    category: "Hospitality",
    description: "Crafted artistic glasswork and custom shower enclosures to elevate the lodge's luxurious ambiance and guest experience.",
    image: projectChebera,
    services: ["Artistic Glasswork", "Shower Enclosures", "Decorative Glass"],
  },
  {
    title: "Maraki Co-Working Space",
    category: "Commercial",
    description: "Provided innovative glass designs, including glass partitions and decorative panels, fostering a collaborative and stylish work environment.",
    image: projectMaraki,
    services: ["Glass Partitions", "Decorative Panels", "Office Glass"],
  },
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Major Projects
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Explore our portfolio of completed projects showcasing our expertise in delivering premium glass solutions across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {project.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
