// Central source of truth for the studies listing and their case-study pages.

export type CaseStudy = {
  /** URL slug, e.g. "jobsea". */
  slug: string;
  img: string;
  /** Category tags shown on the card and in the hero. */
  tag: string[];
  /** Project title — becomes the case-study hero heading. */
  title: string;
  /** Supporting paragraph / metadata description. */
  description: string;
};

export const studies: CaseStudy[] = [
  {
    slug: "jobsea",
    img: "/project1.png",
    tag: ["UI/UX Design", "Dashboard Design"],
    title: "Job Sea – Local Job Portal",
    description:
      "A hyper-local recruitment platform designed to help job seekers find employment within their immediate community and empower local businesses to find the right staff quickly.",
  },
  {
    slug: "a1one-botanicals",
    img: "/project2.png",
    tag: ["Web Design", "eCommerce Website"],
    title: "A1One Botanicals eCommerce",
    description:
      "A refined eCommerce experience for a botanical skincare brand — built to showcase products beautifully and turn browsers into loyal customers.",
  },
  {
    slug: "hotel-management",
    img: "/project3.png",
    tag: ["UI/UX Design", "Mobile App Design"],
    title: "Hotel Management",
    description:
      "An end-to-end hotel management app that streamlines bookings, guest services, and operations into one effortless mobile experience.",
  },
  {
    slug: "nara-ai",
    img: "/project4.png",
    tag: ["UI/UX Design", "Web Design"],
    title: "Nara AI – Travel Plan Builder Agency",
    description:
      "An AI-powered travel planner that turns scattered ideas into personalised, ready-to-book itineraries in minutes.",
  },
  {
    slug: "property-schedule-management",
    img: "/project5.png",
    tag: ["UI/UX Design", "SaaS Application Design"],
    title: "Property Schedule Management",
    description:
      "A SaaS platform that gives property teams a clear, scalable way to manage schedules, maintenance, and tenant communication.",
  },
  {
    slug: "govt-certificate-application",
    img: "/project6.png",
    tag: ["Web Design", "Mobile App Design"],
    title: "Govt. Certificate Application",
    description:
      "A citizen-first digital service that simplifies government certificate applications across web and mobile.",
  },
];

/** Look up a case study by slug. Returns null for unknown slugs. */
export function getStudy(slug: string): CaseStudy | null {
  return studies.find((s) => s.slug === slug) ?? null;
}

/** All slugs — used for static generation of the case-study routes. */
export function allStudySlugs(): string[] {
  return studies.map((s) => s.slug);
}
