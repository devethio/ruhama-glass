import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Compass, Home, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    to: "/",
    label: "Back to Home",
    description: "Return to the main landing page.",
    icon: Home,
  },
  {
    to: "/services",
    label: "Explore Services",
    description: "View glass fabrication, mirrors, partitions, and installation services.",
    icon: Compass,
  },
  {
    to: "/contact",
    label: "Contact Us",
    description: "Get in touch for directions, quotes, or a consultation.",
    icon: Phone,
  },
];

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Page Not Found" noindex />
      <Navbar />

      <section className="page-top-offset page-hero pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="page-hero-grid items-start">
            <div className="max-w-3xl">
              <span className="eyebrow-line text-sky-200">404 Error</span>
              <h1 className="mt-5 mb-6 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                This page
                <span className="block text-sky-200">does not exist</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
                The link may be outdated, the page may have moved, or the address may be incorrect.
                Use one of the routes below to continue browsing Ruhama Glass.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="font-medium" asChild>
                  <Link to="/">
                    Go to Homepage
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white" asChild>
                  <Link to="/contact">Request Assistance</Link>
                </Button>
              </div>
            </div>

            <div className="phi-panel p-6 text-white md:p-7">
              <p className="phi-kicker mb-4 text-sky-200">Requested Path</p>
              <p className="break-all rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/82">
                {location.pathname}
              </p>
              <div className="mt-6 h-px w-full bg-white/12" />
              <p className="mt-5 text-sm leading-relaxed text-white/72">
                If you reached this page from an old bookmark or an external link, updating that link will prevent future 404 errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-glow pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-intro mb-12">
            <span className="eyebrow-line text-primary">Helpful Links</span>
            <h2 className="mt-5 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Continue from one of the main sections
            </h2>
            <p>
              These are the most useful routes for visitors looking for product details, project references, or direct support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="premium-card group p-7 transition-all duration-300 hover:shadow-glass"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Open page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
