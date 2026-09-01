/**
 * TypeScript Type Definitions for Risknox Contact Application.
 * Standardizes component props and structured data across the codebase.
 */

// Navigation link definition for the Header / Navbar
export interface NavLink {
  /** Display label in navigation bar */
  label: string;
  /** Destination URL route */
  href: string;
  /** Indicates if link is currently active */
  isActive?: boolean;
}

// Quick contact item for email/phone boxes in hero section
export interface ContactInfoItem {
  /** Lucide icon identifier key */
  icon: "mail" | "phone";
  /** Title label (e.g. "Email us", "Call us") */
  title: string;
  /** Value string (e.g. "hello@risknox.ai", "+91 9544 99 1001") */
  value: string;
}

// Data payload structure for the contact form state
export interface ContactFormData {
  /** Full user name */
  fullName: string;
  /** Professional work email address */
  workEmail: string;
  /** Organization or company name */
  companyName: string;
  /** Role or job title */
  jobTitle: string;
  /** Selected inquiry topic from dropdown */
  helpCategory: string;
  /** User's detailed requirements message */
  requirements: string;
}

// Data model for "Reach us your way" 4-card grid
export interface ContactCardItem {
  /** Lucide icon key string */
  iconName: "calendar" | "message-square" | "headphones" | "file-text";
  /** Card primary title */
  title: string;
  /** Detailed card description text */
  description: string;
  /** Action link display text */
  linkText: string;
  /** Action link URL destination */
  linkHref: string;
}

// Data model for "We're global, so you're covered" office cards
export interface OfficeLocation {
  /** Country code / tag label (e.g. "INDIA", "UAE", "USA") */
  country: string;
  /** City and state/region header (e.g. "Kozhikode, Kerala") */
  city: string;
  /** Full street and building address string */
  address: string;
  /** Primary contact phone number */
  phone: string;
  /** Type of location graphic to display */
  graphicType: "india" | "uae" | "usa";
}

// Data model for dark CTA banner impact metrics
export interface ImpactStat {
  /** Primary statistic number (e.g. "3.45", "1Cr+", "20+", "100%") */
  value: string;
  /** Primary description label (e.g. "Monitored Asset Value (B+)") */
  label: string;
  /** Icon identifier key for the stat feature */
  iconName: "chart" | "vulnerability" | "integrations" | "audit";
}

// Link item for footer column navigation
export interface FooterLink {
  /** Display label for the link */
  label: string;
  /** Destination path */
  href: string;
}

// Grouped footer navigation column structure
export interface FooterSection {
  /** Column header title (e.g. "PLATFORM", "COMPANY", "RESOURCES") */
  title: string;
  /** Array of link objects */
  links: FooterLink[];
}
