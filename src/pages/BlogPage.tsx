import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { photoLibrary } from "@/lib/photos";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  author_name: string;
  published_at: string;
  link?: string;
  cta?: string;
}

const studioHighlights = [
  {
    tag: "Studio Notes",
    title: "From Concept to Installation",
    description:
      "Every piece starts with precise measurements, then moves through cutting, polishing, and a final fit that makes the glass feel effortless in the space.",
    image: photoLibrary.detail,
  },
  {
    tag: "Project Spotlight",
    title: "Sheger City Head Office",
    description:
      "Clear partitions and subtle mirror accents bring daylight deep into the floor plan while keeping teams connected and focused.",
    image: photoLibrary.sheger,
  },
  {
    tag: "Material Focus",
    title: "Tempered vs. Laminated Glass",
    description:
      "We select the right safety glass for storefronts, offices, and showers to balance strength, clarity, and security.",
    image: photoLibrary.temer,
  },
];

const fallbackPosts: BlogPost[] = [
  {
    id: "fallback-1",
    title: "Designing Light: Glass Facades that Glow After Sunset",
    slug: "designing-light-glass-facades",
    excerpt:
      "A look at how we layer low-iron glass, subtle tint, and clean mullions to create facades that read crisp in daylight and warm at night.",
    cover_image: photoLibrary.facade,
    author_name: "Ruhama Glass Studio",
    published_at: "2024-10-18T09:00:00.000Z",
    link: "/projects",
    cta: "View Projects",
  },
  {
    id: "fallback-2",
    title: "Tempered Partitions for Calm, Focused Workspaces",
    slug: "tempered-partitions-for-workspaces",
    excerpt:
      "Our glass partitions keep acoustic separation while preserving a sense of openness, ideal for co-working floors and executive suites.",
    cover_image: photoLibrary.temer,
    author_name: "Ruhama Glass Studio",
    published_at: "2024-09-04T09:00:00.000Z",
    link: "/projects",
    cta: "See Workspace Builds",
  },
  {
    id: "fallback-3",
    title: "Mirrors that Expand a Room, Not Just Reflect It",
    slug: "mirrors-that-expand-rooms",
    excerpt:
      "Placement, scale, and edge detailing create depth in lobbies, boutiques, and homes while keeping reflections crisp and balanced.",
    cover_image: photoLibrary.mirror,
    author_name: "Ruhama Glass Studio",
    published_at: "2024-08-11T09:00:00.000Z",
    link: "/services",
    cta: "Explore Mirror Work",
  },
  {
    id: "fallback-4",
    title: "Storefront Glass that Invites the Street In",
    slug: "storefront-glass-that-invites",
    excerpt:
      "We pair clean glazing, durable hardware, and precision fitting to create storefronts that welcome customers and perform year-round.",
    cover_image: photoLibrary.storefront,
    author_name: "Ruhama Glass Studio",
    published_at: "2024-07-22T09:00:00.000Z",
    link: "/projects",
    cta: "View Storefronts",
  },
  {
    id: "fallback-5",
    title: "Lobby Statements in Clear + Textured Glass",
    slug: "lobby-statements-textured-glass",
    excerpt:
      "A mix of etched panels and polished edges turns entry spaces into signature moments without overpowering the architecture.",
    cover_image: photoLibrary.lobby,
    author_name: "Ruhama Glass Studio",
    published_at: "2024-06-30T09:00:00.000Z",
    link: "/projects",
    cta: "See Lobby Work",
  },
  {
    id: "fallback-6",
    title: "Hotel-Grade Shower Enclosures for Everyday Homes",
    slug: "hotel-grade-shower-enclosures",
    excerpt:
      "Frameless enclosures with precise hardware and clean seals bring a spa-quality finish to residential bathrooms.",
    cover_image: photoLibrary.showerA,
    author_name: "Ruhama Glass Studio",
    published_at: "2024-05-16T09:00:00.000Z",
    link: "/services",
    cta: "Explore Shower Glass",
  },
];

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, cover_image, author_name, published_at")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const displayedPosts = posts.length > 0 ? posts : fallbackPosts;
  const latestLabel = posts.length > 0 ? "Latest" : "Featured";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the latest trends in glass architecture, design tips, and behind-the-scenes 
              looks at our projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Highlights */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Studio Highlights
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Behind the Glass
            </h2>
            <p className="text-muted-foreground text-lg">
              A closer look at how we shape light, elevate interiors, and deliver precision
              craftsmanship for commercial and residential spaces.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {studioHighlights.map((highlight) => (
              <motion.article
                key={highlight.title}
                variants={itemVariants}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden group hover:shadow-glass transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/60 via-glass-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary-foreground/90 text-glass-dark text-xs font-bold rounded-full">
                    {highlight.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Studio Journal
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Latest Articles & Project Notes
            </h2>
            <p className="text-muted-foreground text-lg">
              Deep dives into architectural glass, mirror craftsmanship, and the real-world
              projects that inspire our next designs.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card border border-border/50 rounded-2xl overflow-hidden animate-pulse">
                  <div className="aspect-[16/10] bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-1/3" />
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : displayedPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-card border border-border/50 rounded-2xl overflow-hidden group hover:shadow-glass transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-muted overflow-hidden relative">
                    {post.cover_image ? (
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                        <span className="text-6xl font-display font-bold text-primary/20">RG</span>
                      </div>
                    )}
                    {index === 0 && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        {latestLabel}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "Draft"}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author_name}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={post.link ?? `/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      {post.cta ?? "Read More"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're working on bringing you insightful articles about glass architecture, 
                design trends, and industry updates. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
