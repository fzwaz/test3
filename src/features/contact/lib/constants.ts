import {
  NavLink,
  ContactInfoItem,
  ContactCardItem,
  OfficeLocation,
  ImpactStat,
  FooterSection,
} from "../types";

/**
 * Constants & Mock Content Data for Risknox Application.
 * Centralizes text copy, links, and structured configuration.
 */

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact", isActive: true },
];

// Quick hero contact information entries
export const HERO_CONTACT_ITEMS: ContactInfoItem[] = [
  {
    icon: "mail",
    title: "Email us",
    value: "info@risknox.ai",
  },
  {
    icon: "phone",
    title: "Call us",
    value: "+91 9947513687",
  },
];

// Select options for contact form topic dropdown
export const FORM_HELP_OPTIONS: string[] = [
  "Sales & Pricing Inquiry",
  "Product Demo Request",
  "Technical Support",
  "Partnership Opportunities",
  "General Questions",
];

// Content for "Reach us your way" 4-card grid
export const CONTACT_CARDS_DATA: ContactCardItem[] = [
  {
    iconName: "calendar",
    title: "Book a demo",
    description: "See Risknox in action with a personalized walkthrough.",
    linkText: "Schedule now",
    linkHref: "#book-demo",
  },
  {
    iconName: "message-square",
    title: "Talk to sales",
    description: "Speak with our team about pricing and solutions.",
    linkText: "Contact sales",
    linkHref: "#talk-sales",
  },
  {
    iconName: "headphones",
    title: "Support",
    description: "Get help from our support team anytime.",
    linkText: "Visit support center",
    linkHref: "#support",
  },
  {
    iconName: "file-text",
    title: "Partner with us",
    description: "Explore partnerships and integration opportunities.",
    linkText: "Learn more",
    linkHref: "#partners",
  },
];

// Global office location records matching design screenshots
export const OFFICE_LOCATIONS_DATA: OfficeLocation[] = [
  {
    country: "INDIA",
    city: "Kochi, Kerala",
    address: "Floor 1, Integrated Startup Complex Kochi Tower 1, Kerala Technology Innovation Zone HMT Road, KINFRA Hi-Tech Park Industrial Area Kalamassery, Ernakulam, Kerala - 683503",
    phone: "+91 9947513687",
    graphicType: "india",
  },
  {
    country: "Saudi Arabia",
    city: "AL-Khobar",
    address: "4ᵗʰ Floor, YBA Kanoo Airlines Center King Abdul Aziz Street Al Khobar - 31952, Saudi Arabia",
    phone: "+966 13 893 9868",
    graphicType: "uae",
  },
  {
    country: "Bahrain",
    city: "Northern Governate",
    address: "Office 31, Building 78, Avenue 23 Saar – 527, Northern Governorate Kingdom of Bahrain",
    phone: "+973 32265666",
    graphicType: "usa",
  },
];

// Impact banner statistics array
export const IMPACT_STATS_DATA: ImpactStat[] = [
  {
    value: "3.45",
    label: "Monitored Asset Value (B+)",
    iconName: "chart",
  },
  {
    value: "1Cr+",
    label: "Vulnerabilities Assessed",
    iconName: "vulnerability",
  },
  {
    value: "20+",
    label: "Integrations Supported",
    iconName: "integrations",
  },
  {
    value: "100%",
    label: "Audit Traceability",
    iconName: "audit",
  },
];

// Structured navigation categories for the application footer
export const FOOTER_SECTIONS_DATA: FooterSection[] = [
  {
    title: "PLATFORM",
    links: [
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Security", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];
