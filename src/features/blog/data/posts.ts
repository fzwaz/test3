import { Category, BlogPost, StatItem, NavGroup } from '../types';

/**
 * Categories list with meta counts and color themes.
 * Matches the categories widget and shortcut pills in the design.
 */
export const CATEGORIES: Category[] = [
  {
    id: 'risk-quantification',
    name: 'Risk Quantification',
    slug: 'risk-quantification',
    description: 'Measure what matters',
    count: 8,
    iconName: 'shield',
    colorTheme: 'orange',
  },
  {
    id: 'threat-intelligence',
    name: 'Threat Intelligence',
    slug: 'threat-intelligence',
    description: 'Stay ahead of threats',
    count: 7,
    iconName: 'radar',
    colorTheme: 'blue',
  },
  {
    id: 'compliance',
    name: 'Compliance',
    slug: 'compliance',
    description: 'Navigate regulations',
    count: 6,
    iconName: 'file-text',
    colorTheme: 'green',
  },
  {
    id: 'security-engineering',
    name: 'Security Engineering',
    slug: 'security-engineering',
    description: 'Build secure systems',
    count: 7,
    iconName: 'cpu',
    colorTheme: 'purple',
  },
  {
    id: 'industry-insights',
    name: 'Industry Insights',
    slug: 'industry-insights',
    description: 'Trends and analysis',
    count: 4,
    iconName: 'trending-up',
    colorTheme: 'peach',
  },
];

/**
 * Featured Article dataset.
 * Top prominent card in the main feed layout.
 */
export const FEATURED_ARTICLE: BlogPost = {
  id: 'featured-1',
  slug: 'why-cyber-risk-needs-a-financial-lens',
  title: 'Why Cyber Risk Needs a Financial Lens',
  excerpt: "Traditional security metrics don't speak the language of the boardroom. Here's how to connect cyber exposure to business impact.",
  content: `
# Why Cyber Risk Needs a Financial Lens

In today's hyper-connected enterprise environment, cybersecurity is no longer just an IT operational concern—it is a core business exposure that directly impacts market valuation, investor confidence, and enterprise resilience.

## The Boardroom Gap

Traditionally, Chief Information Security Officers (CISOs) present security postures using technical metrics:
- Number of vulnerabilities patched
- Mean Time to Detect (MTTD)
- Firewall blocks per second

While these operational metrics are critical for security operations center (SOC) analysts, they fail to answer the fundamental question executive leadership asks: **"What is our maximum potential monetary loss if a critical breach occurs today?"**

## Quantifying Risk in Currency

By translating technical vulnerabilities into monetary loss distributions (using FAIR methodology and Monte Carlo simulations), enterprise leaders can:
1. Prioritize capital allocation toward vulnerabilities with high financial impact.
2. Optimize cyber insurance coverage to match actual financial risk exposure.
3. Justify cybersecurity investments with clear ROI metrics.

> *"If you can't measure your cyber risk in dollars and cents, you aren't managing business risk—you're managing IT tasks."*

## Connecting Exposure to Business Outcomes

To bridge the gap between technical risk and business impact, organizations must adopt continuous automated risk quantification platforms like **Risknox Fortress**. By continuously scanning cloud infrastructure, internal networks, and third-party vendor risks, companies gain an live financial risk score.
  `,
  category: CATEGORIES[0], // Risk Quantification
  author: {
    name: 'Risknox Team',
    avatar: '/avatars/risknox-team.png',
    role: 'Cybersecurity Research Group',
  },
  publishedAt: '2025-05-10',
  readTime: '6 min read',
  featured: true,
  illustrationType: 'financial',
  tags: ['Risk Quantification', 'CISO', 'Financial Lens', 'FAIR Framework'],
};

/**
 * Grid Articles dataset.
 * 6 primary article cards displayed in 2 rows of 3 on the home feed.
 */
export const ARTICLES: BlogPost[] = [
  {
    id: 'art-1',
    slug: 'from-indicators-to-impact-future-of-threat-intel',
    title: 'From Indicators to Impact: The Future of Threat Intel',
    excerpt: 'How contextual intelligence helps security teams prioritize what actually matters.',
    content: `
# From Indicators to Impact: The Future of Threat Intel

Threat intelligence feeds have exploded in volume over the past decade. However, more threat indicators do not automatically lead to better defense. Without business context, SOC teams drown in false positives.

## Contextual Prioritization

Modern threat intelligence moves beyond raw IP blocklists and file hashes to analyze:
- Adversary TTPs (Tactics, Techniques, and Procedures)
- Industry-specific targeting patterns
- Exploitability of internal assets

By linking threat intelligence directly to discovered assets, organizations drastically cut response times.
    `,
    category: CATEGORIES[1], // Threat Intelligence
    author: {
      name: 'Threat Research Desk',
      avatar: '/avatars/researcher.png',
    },
    publishedAt: '2025-05-06',
    readTime: '5 min read',
    illustrationType: 'threat-intel',
    tags: ['Threat Intel', 'SOC', 'Adversary Tracking'],
  },
  {
    id: 'art-2',
    slug: 'dpdp-act-2023-what-enterprises-need-to-know',
    title: 'DPDP Act 2023: What Enterprises Need to Know',
    excerpt: "A practical guide to India's data protection law and how to prepare your organization.",
    content: `
# DPDP Act 2023: What Enterprises Need to Know

The Digital Personal Data Protection (DPDP) Act represents a pivotal shift in data privacy regulations across South Asia and global enterprises operating in India.

## Key Compliance Pillars
1. Data Fiduciary obligations and consent architecture.
2. Penalties up to ₹250 Crore for data breaches.
3. Mandatory security safeguards and prompt breach notifications.

Learn how to audit personal data workflows and automate compliance logging using continuous posture assessment.
    `,
    category: CATEGORIES[2], // Compliance
    author: {
      name: 'Compliance Practice',
      avatar: '/avatars/compliance.png',
    },
    publishedAt: '2025-04-30',
    readTime: '6 min read',
    illustrationType: 'compliance',
    tags: ['DPDP Act', 'Compliance', 'Privacy Law'],
  },
  {
    id: 'art-3',
    slug: 'building-secure-by-design-systems-practical-guide',
    title: 'Building Secure by Design Systems: A Practical Guide',
    excerpt: 'Key principles and practices for embedding security into your development lifecycle.',
    content: `
# Building Secure by Design Systems: A Practical Guide

Bolting security onto software applications right before release is recipe for vulnerability debt. "Secure by Design" embeds threat modeling and automated security checks directly into developer workflows.

## Key Developer Practices
- Infrastructure as Code (IaC) security scanning
- Zero Trust internal API boundaries
- Automated dependency auditing in CI/CD pipelines
    `,
    category: CATEGORIES[3], // Security Engineering
    author: {
      name: 'DevSecOps Guild',
      avatar: '/avatars/engineering.png',
    },
    publishedAt: '2025-04-24',
    readTime: '7 min read',
    illustrationType: 'security-eng',
    tags: ['DevSecOps', 'Secure Coding', 'Architecture'],
  },
  {
    id: 'art-4',
    slug: 'beyond-cvss-why-context-is-everything',
    title: 'Beyond CVSS: Why Context is Everything',
    excerpt: 'Understanding the limitations of traditional scoring and the need for business context.',
    content: `
# Beyond CVSS: Why Context is Everything

A vulnerability rated CVSS 9.8 on an isolated test server is far less risky than a CVSS 7.2 flaw on a customer database server facing the open web.

## The Contextual Risk Engine

Risknox Fortress evaluates:
- Asset criticality & data sensitivity
- Network reachability & exposure level
- Active in-the-wild exploit availability

Prioritize vulnerabilities based on actual risk rather than raw severity scores.
    `,
    category: CATEGORIES[0], // Risk Quantification
    author: {
      name: 'Risknox Team',
      avatar: '/avatars/risknox-team.png',
    },
    publishedAt: '2025-05-18',
    readTime: '5 min read',
    illustrationType: 'risk-quant',
    tags: ['CVSS', 'Risk Scoring', 'Vulnerability Management'],
  },
  {
    id: 'art-5',
    slug: 'cyber-insurance-in-2025-trends-and-predictions',
    title: 'Cyber Insurance in 2025: Trends and Predictions',
    excerpt: "What's changing in cyber insurance and how to position your organization for better outcomes.",
    content: `
# Cyber Insurance in 2025: Trends and Predictions

Underwriters are becoming significantly stricter regarding cybersecurity posture requirements before issuing policy quotes or honoring breach claims.

## What Underwriters Are Demanding
- Evidence of Multi-Factor Authentication (MFA) enforcement across 100% of accounts.
- Continuous third-party risk monitoring.
- Documented incident response exercises.
    `,
    category: CATEGORIES[4], // Industry Insights
    author: {
      name: 'Industry Research',
      avatar: '/avatars/insights.png',
    },
    publishedAt: '2025-04-10',
    readTime: '6 min read',
    illustrationType: 'industry-insights',
    tags: ['Cyber Insurance', 'Underwriting', 'Risk Management'],
  },
  {
    id: 'art-6',
    slug: 'the-rise-of-ai-powered-attacks-are-you-ready',
    title: 'The Rise of AI-Powered Attacks: Are You Ready?',
    excerpt: 'How adversaries are leveraging AI and what defenders need to do differently.',
    content: `
# The Rise of AI-Powered Attacks: Are You Ready?

From hyper-personalized phishing campaigns to automated vulnerability discovery, artificial intelligence is transforming the threat landscape.

## Defending in the AI Era
Defenders must leverage AI-driven continuous monitoring to detect anomalies in real time before malicious actors can exploit zero-day weaknesses.
    `,
    category: CATEGORIES[1], // Threat Intelligence
    author: {
      name: 'AI Risk Lab',
      avatar: '/avatars/airisk.png',
    },
    publishedAt: '2025-04-02',
    readTime: '6 min read',
    illustrationType: 'threat-intel',
    tags: ['AI Security', 'LLM Risks', 'Automated Defense'],
  },
];

/**
 * Popular Posts dataset displayed above the latest articles feed.
 * Full posts so they render exactly like latest article cards.
 */
export const POPULAR_POSTS: BlogPost[] = [
  {
    id: 'pop-1',
    slug: 'the-real-cost-of-ransomware-in-2025',
    title: 'The Real Cost of Ransomware in 2025',
    excerpt: 'Downtime, recovery, and reputation — a practical breakdown of what a ransomware incident really costs an enterprise.',
    content: `
# The Real Cost of Ransomware in 2025

Ransom payments make the headlines, but they are only a fraction of the true cost of a ransomware incident. For most enterprises, downtime, recovery operations, and reputational damage dwarf the payment itself.

## Beyond the Ransom

A typical enterprise ransomware event includes:
- Operational downtime across critical business systems.
- Forensic investigation and environment rebuild costs.
- Regulatory notifications and potential penalties.
- Customer churn following loss of trust.

## Quantify Before It Happens

By modeling ransomware scenarios in financial terms before an incident, leadership can right-size backups, segmentation, and cyber insurance coverage — turning a board-level fear into a budgeted, managed exposure.
    `,
    category: CATEGORIES[1], // Threat Intelligence
    author: {
      name: 'Threat Research Desk',
      avatar: '/avatars/researcher.png',
    },
    publishedAt: '2025-05-08',
    readTime: '5 min read',
    illustrationType: 'threat-intel',
    tags: ['Ransomware', 'Risk Quantification', 'Incident Response'],
  },
  {
    id: 'pop-2',
    slug: 'mapping-threats-to-mitre-attck',
    title: 'Mapping Threats to MITRE ATT&CK',
    excerpt: 'How mapping adversary behavior to ATT&CK tactics sharpens detection and prioritizes engineering effort.',
    content: `
# Mapping Threats to MITRE ATT&CK

MITRE ATT&CK gives security teams a common language for adversary behavior. The real value comes from mapping what you observe in your own environment to those tactics — and engineering detections where coverage is thinnest.

## From Framework to Coverage

Start with the tactics most relevant to your industry, then:
- Inventory existing detections per technique.
- Score coverage gaps by asset criticality.
- Prioritize engineering work that closes the highest-risk gaps first.

## Make It Continuous

Threat landscapes shift quarterly. Re-mapping on a cadence turns ATT&CK from a one-time exercise into a living measurement of defensive posture.
    `,
    category: CATEGORIES[3], // Security Engineering
    author: {
      name: 'Threat Research Desk',
      avatar: '/avatars/researcher.png',
    },
    publishedAt: '2025-04-20',
    readTime: '7 min read',
    illustrationType: 'security-eng',
    tags: ['MITRE ATT&CK', 'Detection Engineering', 'Threat Intel'],
  },
  {
    id: 'pop-3',
    slug: '10-security-metrics-every-ciso-should-track',
    title: '10 Security Metrics Every CISO Should Track',
    excerpt: 'Move past vanity metrics — the ten measurements that connect security performance to business outcomes.',
    content: `
# 10 Security Metrics Every CISO Should Track

Patch counts and blocked attacks describe activity, not outcomes. These ten metrics connect security performance to the business results boards actually fund.

## Outcome Over Activity

Prioritize metrics like mean time to contain, percentage of critical assets with validated controls, third-party exposure in monetary terms, and audit finding recurrence rates.

## Report in Currency

Every metric lands harder paired with its financial exposure. A CISO who reports risk in dollars earns budget faster than one who reports it in ticket counts.
    `,
    category: CATEGORIES[0], // Risk Quantification
    author: {
      name: 'Threat Research Desk',
      avatar: '/avatars/researcher.png',
    },
    publishedAt: '2025-04-15',
    readTime: '6 min read',
    illustrationType: 'risk-quant',
    tags: ['CISO', 'Security Metrics', 'Risk Quantification'],
  },
];

/**
 * Statistics data for the dark CTA banner section.
 */
export const CTA_STATS: StatItem[] = [
  {
    value: '$3.45M',
    label: 'MONITORED ASSET VALUE (B+)',
    iconName: 'shield',
  },
  {
    value: '1Cr+',
    label: 'VULNERABILITIES ASSESSED',
    iconName: 'layers',
  },
  {
    value: '20+',
    label: 'INTEGRATIONS SUPPORTED',
    iconName: 'grid',
  },
  {
    value: '100%',
    label: 'AUDIT TRACEABILITY',
    iconName: 'check-circle',
  },
];

/**
 * Footer link navigation structure.
 */
export const FOOTER_NAV: NavGroup[] = [
  {
    title: 'PRODUCT',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Changelog', href: '#changelog' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Status', href: '#status' },
    ],
  },
  {
    title: 'COMPANY',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '/' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'DEVELOPERS',
    items: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'SDKs', href: '#sdks' },
      { label: 'Community', href: '#community' },
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },
];
