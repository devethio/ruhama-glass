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

const Index = () => {
  return (
    <main className="min-h-screen">
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
