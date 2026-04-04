import { seoSite } from "@/components/SEO";

const socialLinks = [
  "https://www.ruhamaglass.com",
];

export const buildBreadcrumbJsonLd = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${seoSite.url}${item.path}`,
  })),
});

export const buildOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ruhama Glass",
  url: seoSite.url,
  logo: `${seoSite.url}/logo.jpg`,
  image: seoSite.defaultImage,
  email: "info@ruhamaglass.com",
  telephone: "+251966494949",
  sameAs: socialLinks,
});

export const buildLocalBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Ruhama Glass",
  url: seoSite.url,
  logo: `${seoSite.url}/logo.jpg`,
  image: seoSite.defaultImage,
  telephone: "+251966494949",
  email: "info@ruhamaglass.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
    streetAddress: "Bole Road",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Addis Ababa",
    },
    {
      "@type": "Country",
      name: "Ethiopia",
    },
  ],
  hasMap: "https://maps.google.com/?q=9.0054,38.7636",
  department: [
    {
      "@type": "HomeAndConstructionBusiness",
      name: "Ruhama Glass Showroom",
      hasMap: "https://maps.google.com/?q=9.0054,38.7636",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
        streetAddress: "Bole Road",
      },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      name: "Ruhama Glass Workshop",
      hasMap: "https://maps.google.com/?q=9.004380,38.779761",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
});

export const buildServiceListJsonLd = (services: string[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Ruhama Glass",
      url: seoSite.url,
    },
    areaServed: "Ethiopia",
  })),
});

export const buildCollectionPageJsonLd = (
  title: string,
  items: Array<{ name: string; path?: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  url: seoSite.url,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { url: `${seoSite.url}${item.path}` } : {}),
    })),
  },
});
