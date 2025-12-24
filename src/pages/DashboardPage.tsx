import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Heart, FileText, Bell, LogOut, 
  ChevronRight, Clock, CheckCircle, AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface QuoteRequest {
  id: string;
  project_type: string;
  status: string;
  created_at: string;
}

interface Favorite {
  id: string;
  item_type: string;
  item_title: string;
  item_image: string | null;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const DashboardPage = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    // Fetch quote requests
    const { data: quotesData } = await supabase
      .from("quote_requests")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(5);

    if (quotesData) setQuotes(quotesData);

    // Fetch favorites
    const { data: favoritesData } = await supabase
      .from("favorites")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(6);

    if (favoritesData) setFavorites(favoritesData);

    // Fetch notifications
    const { data: notificationsData } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(10);

    if (notificationsData) setNotifications(notificationsData);
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "quotes", label: "My Quotes", icon: FileText },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-glass sticky top-28"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {user?.user_metadata?.full_name || "Member"}
                  </h2>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>

                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <tab.icon className="h-5 w-5" />
                        {tab.label}
                      </span>
                      {tab.id === "notifications" && unreadCount > 0 && (
                        <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                          {unreadCount}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <h1 className="font-display text-3xl font-bold text-foreground">
                      Welcome back, {user?.user_metadata?.full_name?.split(" ")[0] || "there"}!
                    </h1>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-card border border-border/50 rounded-xl p-6">
                        <FileText className="h-8 w-8 text-primary mb-3" />
                        <p className="text-3xl font-bold text-foreground">{quotes.length}</p>
                        <p className="text-muted-foreground text-sm">Quote Requests</p>
                      </div>
                      <div className="bg-card border border-border/50 rounded-xl p-6">
                        <Heart className="h-8 w-8 text-accent mb-3" />
                        <p className="text-3xl font-bold text-foreground">{favorites.length}</p>
                        <p className="text-muted-foreground text-sm">Saved Items</p>
                      </div>
                      <div className="bg-card border border-border/50 rounded-xl p-6">
                        <Bell className="h-8 w-8 text-primary mb-3" />
                        <p className="text-3xl font-bold text-foreground">{unreadCount}</p>
                        <p className="text-muted-foreground text-sm">Unread Notifications</p>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-card border border-border/50 rounded-xl p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                        Recent Quote Requests
                      </h3>
                      {quotes.length > 0 ? (
                        <div className="space-y-3">
                          {quotes.slice(0, 3).map((quote) => (
                            <div
                              key={quote.id}
                              className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                {getStatusIcon(quote.status)}
                                <div>
                                  <p className="font-medium text-foreground">{quote.project_type}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(quote.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs font-medium capitalize px-2 py-1 bg-background rounded">
                                {quote.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">
                          No quote requests yet.{" "}
                          <a href="/contact" className="text-primary hover:underline">
                            Request a quote
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "quotes" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h1 className="font-display text-3xl font-bold text-foreground">
                        My Quote Requests
                      </h1>
                      <Button asChild>
                        <a href="/contact">New Quote</a>
                      </Button>
                    </div>

                    {quotes.length > 0 ? (
                      <div className="space-y-4">
                        {quotes.map((quote) => (
                          <div
                            key={quote.id}
                            className="bg-card border border-border/50 rounded-xl p-6"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-foreground">{quote.project_type}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Submitted on {new Date(quote.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                {getStatusIcon(quote.status)}
                                <span className="text-sm font-medium capitalize">{quote.status}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-card border border-border/50 rounded-xl p-12 text-center">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold text-foreground mb-2">No quotes yet</h3>
                        <p className="text-muted-foreground mb-4">
                          Start by requesting a quote for your project.
                        </p>
                        <Button asChild>
                          <a href="/contact">Request a Quote</a>
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "favorites" && (
                  <div className="space-y-6">
                    <h1 className="font-display text-3xl font-bold text-foreground">
                      My Favorites
                    </h1>

                    {favorites.length > 0 ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {favorites.map((fav) => (
                          <div
                            key={fav.id}
                            className="bg-card border border-border/50 rounded-xl overflow-hidden group"
                          >
                            {fav.item_image && (
                              <div className="aspect-video bg-muted overflow-hidden">
                                <img
                                  src={fav.item_image}
                                  alt={fav.item_title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                            <div className="p-4">
                              <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
                                {fav.item_type}
                              </p>
                              <h3 className="font-semibold text-foreground">{fav.item_title}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-card border border-border/50 rounded-xl p-12 text-center">
                        <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold text-foreground mb-2">No favorites yet</h3>
                        <p className="text-muted-foreground mb-4">
                          Browse our projects and save your favorites.
                        </p>
                        <Button asChild>
                          <a href="/projects">Explore Projects</a>
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-6">
                    <h1 className="font-display text-3xl font-bold text-foreground">
                      Notifications
                    </h1>

                    {notifications.length > 0 ? (
                      <div className="space-y-3">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`bg-card border rounded-xl p-4 ${
                              notif.is_read ? "border-border/50" : "border-primary/30 bg-primary/5"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <Bell className={`h-5 w-5 mt-0.5 ${notif.is_read ? "text-muted-foreground" : "text-primary"}`} />
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground">{notif.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {new Date(notif.created_at).toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-card border border-border/50 rounded-xl p-12 text-center">
                        <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold text-foreground mb-2">No notifications</h3>
                        <p className="text-muted-foreground">
                          You're all caught up!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DashboardPage;
