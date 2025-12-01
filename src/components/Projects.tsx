import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectSheger from "@/assets/project-sheger.jpg";
import projectChebera from "@/assets/project-chebera.jpg";
import projectMaraki from "@/assets/project-maraki.jpg";
import projectTemer from "@/assets/project-temer.jpg";

const projects = [
  {
    title: "Sheger City Head Office",
    category: "Commercial",
    description: "Custom glass solutions, architectural glass installations, and decorative mirrors enhancing the modern aesthetic.",
    image: projectSheger,
  },
  {
    title: "Temer Real Estate",
    category: "Real Estate",
    description: "Tempered glass partitions and custom mirrors transforming properties into sophisticated spaces.",
    image: projectTemer,
  },
  {
    title: "Chebera Churchura Lodge",
    category: "Hospitality",
    description: "Artistic glasswork and custom shower enclosures elevating the lodge's luxurious ambiance.",
    image: projectChebera,
  },
  {
    title: "Maraki Co-Working Space",
    category: "Commercial",
    description: "Innovative glass partitions and decorative panels fostering a collaborative work environment.",
    image: projectMaraki,
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Featured Projects
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 font-medium" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-glass-dark via-glass-dark/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-medium mb-3 border border-primary/30">
                  {project.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
