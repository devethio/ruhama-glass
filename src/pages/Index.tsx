import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Projects } from "@/components/Projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { SEO, seoSite } from "@/components/SEO";
import { buildLocalBusinessJsonLd, buildOrganizationJsonLd } from "@/lib/seo";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Premium Glass Solutions in Ethiopia"
        description="Ruhama Glass provides custom mirrors, shower enclosures, glass partitions, storefront glazing, and architectural glass solutions in Addis Ababa and across Ethiopia."
        keywords="Ruhama Glass, glass company Addis Ababa, custom mirrors Ethiopia, shower enclosures Addis Ababa, glass partitions Ethiopia, architectural glass Ethiopia"
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Ruhama Glass",
            url: seoSite.url,
          },
          buildOrganizationJsonLd(),
          buildLocalBusinessJsonLd(),
        ]}
      />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ProductShowcase />
      <Projects />
      <ProjectGallery />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
