import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Link2 } from "lucide-react";
import { SiPinterest, SiTiktok } from "react-icons/si";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Member Login", href: "/auth" },
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
    <footer className="bg-glass-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-white/95 p-1.5 shadow-soft ring-1 ring-white/20">
                <img
                  src="/logo.jpg"
                  alt="Ruhama Glass logo"
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <span className="font-display text-[1.9rem] font-bold block">Ruhama</span>
                <span className="mt-1 block text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/75">Glass</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Shaping spaces with innovation and craftsmanship. Premium glass solutions for residential and commercial projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/ruhama.glass"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61567397336547"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://pin.it/6wEj43w1F"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <SiPinterest className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@ruhamaglassandmirror?_r=1&_t=ZM-91zVzOi0HA8"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
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
                    className="text-sm text-white/70 transition-colors hover:text-white"
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
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-200" />
                <span className="text-sm text-white/70">
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-200" />
                <div className="flex flex-col gap-1 text-sm text-white/70">
                  {[
                    { label: "+251 966 494 949", tel: "+251966494949" },
                    { label: "+251 966 595 959", tel: "+251966595959" },
                    { label: "+251 115 576 895", tel: "+251115576895" },
                  ].map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="transition-colors hover:text-white"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-sky-200" />
                <a
                  href="mailto:info@ruhamaglass.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  info@ruhamaglass.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Ruhama Glass. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
