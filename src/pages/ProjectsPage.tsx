import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ExternalLink } from "lucide-react";
import { photoLibrary } from "@/lib/photos";
import { SEO } from "@/components/SEO";
import { buildBreadcrumbJsonLd, buildCollectionPageJsonLd } from "@/lib/seo";

const projects = [
  {
    title: "Sheger City Head Office",
    category: "Commercial",
    description: "Delivered custom glass solutions, including architectural glass installations and decorative mirrors, enhancing the office's modern aesthetic and functionality.",
    image: photoLibrary.sheger,
    services: ["Architectural Glass", "Decorative Mirrors", "Glass Partitions"],
  },
  {
    title: "Temer Real Estate",
    category: "Real Estate",
    description: "Designed and installed tempered glass partitions and custom mirrors, transforming real estate properties into sophisticated, high-value spaces.",
    image: photoLibrary.temer,
    services: ["Tempered Glass", "Custom Mirrors", "Glass Partitions"],
  },
  {
    title: "Chebera Churchura Lodge",
    category: "Hospitality",
    description: "Crafted artistic glasswork and custom shower enclosures to elevate the lodge's luxurious ambiance and guest experience.",
    image: photoLibrary.chebera,
    services: ["Artistic Glasswork", "Shower Enclosures", "Decorative Glass"],
  },
  {
    title: "Maraki Co-Working Space",
    category: "Commercial",
    description: "Provided innovative glass designs, including glass partitions and decorative panels, fostering a collaborative and stylish work environment.",
    image: photoLibrary.maraki,
    services: ["Glass Partitions", "Decorative Panels", "Office Glass"],
  },
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Projects and Portfolio"
        description="View Ruhama Glass projects across commercial, hospitality, workplace, and residential spaces, including mirrors, partitions, façades, and shower enclosures."
        keywords="Ruhama Glass projects, glass portfolio Ethiopia, commercial glass Addis Ababa, mirror projects Ethiopia"
        path="/projects"
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          buildCollectionPageJsonLd(
            "Ruhama Glass Projects",
            projects.map((project) => ({ name: project.title })),
          ),
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="page-top-offset page-hero pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="page-hero-grid">
            <div className="max-w-3xl">
              <span className="eyebrow-line text-sky-200">Our Portfolio</span>
              <h1 className="mt-5 mb-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Signature work shaped for
                <span className="block text-sky-200">commercial and residential spaces</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
                Explore selected Ruhama Glass projects across offices, hospitality venues, real estate developments, and bespoke interiors.
              </p>
            </div>

            <div className="phi-panel p-6 text-white md:p-7">
              <p className="phi-kicker mb-4 text-sky-200">Project Types</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-3xl">Commercial</p>
                  <p className="mt-1 text-sm text-white/72">Offices, storefronts, shared spaces</p>
                </div>
                <div>
                  <p className="font-display text-3xl">Hospitality</p>
                  <p className="mt-1 text-sm text-white/72">Lodges, guest spaces, bathrooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-glow py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-intro mb-14">
            <span className="eyebrow-line text-primary">Selected Projects</span>
            <h2 className="mt-5 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Finished with precision, installed to feel effortless
            </h2>
            <p>
              We focus on clarity of detail, strong fit, and elegant integration so the final result supports the architecture instead of competing with it.
            </p>
          </div>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative group overflow-hidden rounded-[2rem] premium-card p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} premium-card p-8 md:p-10`}>
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
                        className="soft-tag bg-secondary/90 border-secondary/30 text-secondary-foreground"
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
