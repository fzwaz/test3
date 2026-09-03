/**
 * Author interface representing blog content writers and security research teams.
 */
export interface Author {
  name: string;
  avatar: string; // URL or fallback identifier for author avatar
  role?: string;
}

/**
 * Category interface for categorizing posts and filtering content feed.
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  iconName: 'shield' | 'radar' | 'file-text' | 'cpu' | 'trending-up';
  colorTheme: 'orange' | 'blue' | 'green' | 'purple' | 'peach';
}

/**
 * BlogPost interface representing full article metadata and content structure.
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full markdown / HTML string for detailed article page/modal
  category: Category;
  author: Author;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  popular?: boolean;
  illustrationType: 'financial' | 'threat-intel' | 'compliance' | 'security-eng' | 'risk-quant' | 'industry-insights';
  tags: string[];
}

/**
 * Popular post widget item interface.
 */
export interface PopularPost {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  readTime: string;
  categoryTheme: 'blue' | 'purple' | 'orange';
}

/**
 * Key Performance Indicator metric statistic item for the CTA banner.
 */
export interface StatItem {
  value: string;
  label: string;
  subtitle?: string;
  iconName: 'shield' | 'layers' | 'grid' | 'check-circle';
}

/**
 * Navigation item structure for Header and Footer link groups.
 */
export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}
