// Central source of truth for the services listing and their detail pages.

export type ServiceGroup = {
  title: string;
  img: string;
  subs: string[];
};

export const services: ServiceGroup[] = [
  {
    title: "UI/UX Design",
    img: "/service2.png",
    subs: ["UI/UX Design", "App Design", "Wireframing & Prototyping", "Website Design", "Dashboard Design", "Product Design"],
  },
  {
    title: "Web Development",
    img: "/service2.png",
    subs: ["Full Stack Development", "E-Commerce Solutions", "Career-Pattern Architecture", "Responsive Mobile-First Design", "SAAS Application Development", "Progressive Web App Design"],
  },
  {
    title: "Mobile App Development",
    img: "/service2.png",
    subs: ["iOS & Android App", "Native & Hybrid Development", "App UI/UX Optimization", "App Store Deployment"],
  },
  {
    title: "Low-Code/No-Code Solutions",
    img: "/service2.png",
    subs: ["Webflow", "Shopify", "WordPress", "WIX", "Framer", "Sales Funnel"],
  },
  {
    title: "Branding & Visual Identity",
    img: "/service2.png",
    subs: ["Graphic & Motion Design", "Logo & Brand Design", "Style Guides & Design Systems", "Packaging & Print Design"],
  },
];

/** Turn a service name into a URL-safe slug, e.g. "UI/UX Design" -> "ui-ux-design". */
export function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type ServiceDetail = {
  /** Service name, e.g. "App Design". */
  label: string;
  /** First hero line (ink), rational headline built from the service name. */
  title: string;
  /** Second hero line (purple highlight), the audience / outcome. */
  highlight: string;
  /** Supporting paragraph under the hero. */
  description: string;
};

// Per-service audience / outcome line that keeps the hero rational and aligned
// with the service name.
const HIGHLIGHTS: Record<string, string> = {
  // UI/UX Design
  "UI/UX Design": "Enterprises, Startups & Scaling Brands",
  "App Design": "Mobile & Web Products",
  "Wireframing & Prototyping": "Faster Product Decisions",
  "Website Design": "Brands That Convert",
  "Dashboard Design": "Data-Heavy Products",
  "Product Design": "End-to-End Experiences",
  // Web Development
  "Full Stack Development": "Scalable Web Applications",
  "E-Commerce Solutions": "Stores That Sell",
  "Career-Pattern Architecture": "Structured Digital Platforms",
  "Responsive Mobile-First Design": "Every Screen Size",
  "SAAS Application Development": "Growing SaaS Companies",
  "Progressive Web App Design": "App-Like Web Experiences",
  // Mobile App Development
  "iOS & Android App": "Native Mobile Experiences",
  "Native & Hybrid Development": "Cross-Platform Products",
  "App UI/UX Optimization": "Higher Engagement & Retention",
  "App Store Deployment": "A Smooth, Confident Launch",
  // Low-Code / No-Code
  Webflow: "Pixel-Perfect No-Code Sites",
  Shopify: "High-Converting Storefronts",
  WordPress: "Flexible Content Sites",
  WIX: "Fast Business Websites",
  Framer: "Interactive Marketing Sites",
  "Sales Funnel": "More Leads & Conversions",
  // Branding & Visual Identity
  "Graphic & Motion Design": "Brands That Move",
  "Logo & Brand Design": "Memorable Brand Identities",
  "Style Guides & Design Systems": "Consistent Brand Experiences",
  "Packaging & Print Design": "Products That Stand Out",
};

// Every linkable sub-service, flattened from the groups above.
const ALL_LABELS = Array.from(new Set(services.flatMap((g) => g.subs)));

function buildDetail(label: string): ServiceDetail {
  const highlight = HIGHLIGHTS[label] ?? "Enterprises, Startups & Scaling Brands";
  return {
    label,
    title: `${label} Services for`,
    highlight,
    description: `Our ${label.toLowerCase()} services help enterprises, startups, and scaling brands ship digital experiences that feel effortless — combining strategy, research, and craft to drive real business growth.`,
  };
}

const DETAILS: Record<string, ServiceDetail> = Object.fromEntries(
  ALL_LABELS.map((label) => [slugify(label), buildDetail(label)]),
);

/** Look up a service detail by slug. Returns null for unknown slugs. */
export function getServiceDetail(slug: string): ServiceDetail | null {
  return DETAILS[slug] ?? null;
}

/** All slugs — used for static generation of the detail routes. */
export function allServiceSlugs(): string[] {
  return Object.keys(DETAILS);
}
