import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Link2 } from "lucide-react";
import { SiPinterest, SiTiktok } from "react-icons/si";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Glass Cutting & Shaping",
  "Mirror Work",
  "Glass Installation",
  "Decorative Glass",
  "Architectural Glass",
  "Security Glass",
];

export const Footer = () => {
  return (
    <footer className="bg-glass-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.jpg"
                alt="Ruhama Glass logo"
                className="h-12 w-12 rounded-full object-cover border border-primary-foreground/30"
              />
              <div className="leading-tight">
                <span className="font-display text-2xl font-bold block">Ruhama</span>
                <span className="font-display text-lg text-primary-foreground/70 block -mt-1">Glass</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Shaping spaces with innovation and craftsmanship. Premium glass solutions for residential and commercial projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/ruhama.glass"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61567397336547"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://pin.it/6wEj43w1F"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <SiPinterest className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@ruhamaglassandmirror?_r=1&_t=ZM-91zVzOi0HA8"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <SiTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-primary-foreground/70 text-sm">
                  {[
                    { label: "+251 966 494 949", tel: "+251966494949" },
                    { label: "+251 966 595 959", tel: "+251966595959" },
                    { label: "+251 115 576 895", tel: "+251115576895" },
                  ].map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@ruhamaglass.com"
                  className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
                >
                  info@ruhamaglass.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Ruhama Glass. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
