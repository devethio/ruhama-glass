import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Ruhama Glass";
const SITE_URL = "https://www.ruhamaglass.com";
const DEFAULT_DESCRIPTION =
  "Ruhama Glass delivers premium glass solutions in Addis Ababa and across Ethiopia, including custom mirrors, partitions, shower enclosures, and architectural glass.";
const DEFAULT_IMAGE = `${SITE_URL}/photos/hero-showroom.jpg`;

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  path?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
}

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  keywords,
  path,
  type = "website",
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = path ?? location.pathname;
    const canonicalUrl = toAbsoluteUrl(pagePath);
    const imageUrl = toAbsoluteUrl(image);
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const robots = noindex ? "noindex, nofollow" : "index, follow";

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="author"]', { name: "author", content: SITE_NAME });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });

    const keywordsMeta = document.head.querySelector('meta[name="keywords"]');
    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    } else {
      keywordsMeta?.remove();
    }

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove());

    const jsonLdItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    jsonLdItems.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [description, image, jsonLd, keywords, location.pathname, noindex, path, title, type]);

  return null;
};

export const seoSite = {
  name: SITE_NAME,
  url: SITE_URL,
  defaultImage: DEFAULT_IMAGE,
};
