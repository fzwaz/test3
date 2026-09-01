import { IndustrySolution, RoleSolution, SolutionPillar, SolutionMetric } from "../types";

export const INDUSTRIES_DATA: IndustrySolution[] = [
  {
    id: "bfsi",
    name: "Banking & Financial Services",
    badge: "BFSI & FINTECH",
    tagline: "Resilient Financial Architecture & Regulatory Assurance",
    icon: "Landmark",
    description:
      "Mitigate systemic cyber risks, safeguard high-frequency transaction networks, and guarantee continuous alignment with global and regional regulatory mandates including RBI, DPDPA, PCI-DSS v4.0, and SOC 2 Type II.",
    complianceStandards: ["RBI Cyber Framework", "PCI-DSS v4.0", "DPDPA", "SOC 2 Type II", "ISO 27001"],
    threatVector: "API Intercepts & Third-Party FinTech Supply Chain Vulnerabilities",
    averageExposure: "$18.4M Average FinTech Incident Exposure",
    keyCapabilities: [
      {
        title: "Automated Sovereign Compliance",
        description: "Continuous evidence collection mapped across RBI CSF, SEBI, and DPDPA mandates with zero manual audit bottlenecks.",
      },
      {
        title: "Real-time Attack Surface Mapping",
        description: "Discovers shadow banking APIs, exposed transaction gateways, and unauthorized cloud assets in minutes.",
      },
      {
        title: "Financial Risk Quantification",
        description: "Translates technical vulnerabilities directly into dollarized loss expectancies (VaR) for Board and ALCO committees.",
      },
    ],
    stat: {
      value: "94%",
      label: "Audit preparation time reduced for BFSI institutions",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    badge: "HEALTHCARE & PHARMA",
    tagline: "Uncompromising Patient Data Privacy & Medical IoT Defense",
    icon: "Stethoscope",
    description:
      "Protect critical medical infrastructure, connected IoT devices, and sensitive electronic health records (EHR) while meeting strict HIPAA, DPDPA, and ISO 27799 privacy standards without disrupting clinical operations.",
    complianceStandards: ["HIPAA Security Rule", "DPDPA Health Mandate", "ISO 27799", "FDA Cybersecurity"],
    threatVector: "Ransomware Targeting PACS & Vulnerable Telehealth Endpoints",
    averageExposure: "$10.9M Average Healthcare Breach Cost",
    keyCapabilities: [
      {
        title: "IoMT & Asset Telemetry Defense",
        description: "Passive agentless discovery of medical telemetry devices, diagnostic stations, and hospital network endpoints.",
      },
      {
        title: "Protected Health Information (PHI) Guard",
        description: "Continuous telemetry monitoring to flag data exfiltration pathways and unauthorized cloud sharing.",
      },
      {
        title: "Clinical Continuity Risk Engine",
        description: "Quantifies operational downtime impact in clinical hours and monetary risk.",
      },
    ],
    stat: {
      value: "100%",
      label: "Automated HIPAA & DPDPA evidence mapping coverage",
    },
  },
  {
    id: "saas",
    name: "SaaS & Cloud Enterprises",
    badge: "TECH & CLOUD",
    tagline: "Frictionless Sales Enablement & Continuous Trust",
    icon: "Cloud",
    description:
      "Turn security and compliance into an enterprise sales accelerator. Satisfy strict vendor risk questionnaires, achieve continuous compliance across multi-cloud environments, and secure your CI/CD software supply chain.",
    complianceStandards: ["SOC 2 Type II", "ISO 27001", "GDPR", "FedRAMP Ready", "CSA STAR"],
    threatVector: "CI/CD Pipeline Secrets Leakage & Multi-tenant Cloud Drift",
    averageExposure: "$4.5M Multi-Tenant Infrastructure Risk",
    keyCapabilities: [
      {
        title: "Continuous Multi-Cloud Posture",
        description: "Real-time misconfiguration scanning across AWS, Azure, GCP, and Kubernetes clusters.",
      },
      {
        title: "Automated Security Trust Portal",
        description: "Share real-time compliance posture and verified controls with prospective enterprise buyers instantly.",
      },
      {
        title: "Zero-Day Supply Chain Defense",
        description: "Detects exposed repository tokens, open buckets, and unpatched dependencies before attackers exploit them.",
      },
    ],
    stat: {
      value: "3.5x",
      label: "Faster enterprise procurement & vendor review cycle",
    },
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain",
    badge: "INDUSTRY 4.0",
    tagline: "OT/IT Convergence Security & Supply Chain Integrity",
    icon: "Factory",
    description:
      "Bridge the gap between operational technology (OT), industrial control systems (ICS), and enterprise IT networks. Prevent operational shutdowns, ransomware extortion, and supply chain sabotage.",
    complianceStandards: ["IEC 62443", "NIST CSF", "ISO 27001", "CMMC Level 2"],
    threatVector: "Supply-Chain Vendor Infiltration & PLC/SCADA Protocol Exploitation",
    averageExposure: "$7.8M Plant Downtime & Extortion Exposure",
    keyCapabilities: [
      {
        title: "OT & IT Segment Isolation Auditing",
        description: "Validates firewall zoning, air-gap integrity, and industrial controller exposure.",
      },
      {
        title: "Tier-1 to Tier-N Supplier Risk",
        description: "Continuous outside-in security ratings and risk quantification for external contractors and component suppliers.",
      },
      {
        title: "Production Downtime Modeling",
        description: "Simulates revenue loss per factory hour from cyber incidents to guide defensive CapEx investments.",
      },
    ],
    stat: {
      value: "82%",
      label: "Fewer critical blind spots in OT/IT bridge infrastructure",
    },
  },
  {
    id: "energy",
    name: "Energy & Critical Infrastructure",
    badge: "CRITICAL INFRASTRUCTURE",
    tagline: "National Grid Resilience & Sovereign Defense",
    icon: "Zap",
    description:
      "Defend utilities, smart grids, oil & gas distribution networks, and public utilities against nation-state adversaries with defense-in-depth attack surface governance and strict compliance.",
    complianceStandards: ["NERC CIP", "NIS 2 Directive", "CERT-In Guidelines", "ISO 27019"],
    threatVector: "Advanced Persistent Threats (APTs) Targeting Grid Telemetry",
    averageExposure: "$22.6M Critical Utility Interruption Cost",
    keyCapabilities: [
      {
        title: "Substation & Remote Site Visibility",
        description: "Comprehensive discovery of remote telemetry units, microwave links, and SCADA interfaces.",
      },
      {
        title: "Geopolitical Threat Correlation",
        description: "Real-time threat intelligence matching observed vulnerabilities against active nation-state adversary playbooks.",
      },
      {
        title: "Mandatory Incident Reporting Engine",
        description: "Pre-configured rapid incident telemetry dispatch compliant with strict 6-hour CERT-In / NIS 2 timelines.",
      },
    ],
    stat: {
      value: "< 15min",
      label: "Mean time to detect external asset posture regressions",
    },
  },
  {
    id: "retail",
    name: "E-Commerce & Retail",
    badge: "RETAIL & COMMERCE",
    tagline: "Customer Credential Protection & Brand Integrity",
    icon: "ShoppingBag",
    description:
      "Guard customer credit card details, prevent digital skimming (Magecart), eliminate account takeover (ATO) threats, and ensure peak-season uninterrupted uptime during flash sales and holidays.",
    complianceStandards: ["PCI-DSS v4.0", "DPDPA", "CCPA / CPRA", "SOC 2"],
    threatVector: "Client-Side Script Tampering, Magecart & Credential Stuffing",
    averageExposure: "$5.1M Brand Equity & Chargeback Liability",
    keyCapabilities: [
      {
        title: "Client-Side Script & Tag Governance",
        description: "Monitors third-party JavaScript trackers and payment gateways for unauthorized data exfiltration.",
      },
      {
        title: "Subdomain & Brand Impersonation Guard",
        description: "Identifies lookalike phishing domains, fake checkout portals, and exposed test environments.",
      },
      {
        title: "Peak-Traffic Resilience Assurance",
        description: "Validates security controls under extreme load without throttling checkout conversion rates.",
      },
    ],
    stat: {
      value: "99.99%",
      label: "Payment flow security compliance uptime",
    },
  },
];

export const ROLES_DATA: RoleSolution[] = [
  {
    id: "ciso",
    title: "Chief Information Security Officer (CISO)",
    shortTitle: "CISOs & Security Leaders",
    persona: "Strategic Defense & Executive Alignment",
    icon: "ShieldAlert",
    summary:
      "Transform security from a cost center into a quantifiable business enabler. Get full visibility over enterprise attack surface, automated compliance proofs, and financial risk metrics that command board respect.",
    primaryChallenge:
      "Struggling to communicate technical vulnerabilities in business terms while managing alert fatigue and fragmented tool sprawl across disjointed teams.",
    risknoxImpact:
      "Consolidates attack surface management, compliance posture, and financial risk quantification into a single pane of glass, cutting reporting overhead by 80%.",
    deliverables: [
      "Executive Board-Ready Risk & Exposure Reports (in dollar values)",
      "Continuous External Attack Surface Inventory & Severity Triage",
      "Unified Multi-Standard Compliance Matrix (ISO, SOC 2, DPDPA, RBI)",
      "Automated Remediation Prioritization ranked by Financial Risk Reduction",
    ],
    metrics: [
      { value: "78%", label: "Reduction in Board prep time" },
      { value: "4.2x", label: "Faster remediation of critical exposures" },
    ],
  },
  {
    id: "cro",
    title: "Chief Risk Officer (CRO) & Risk Committee",
    shortTitle: "CROs & Risk Officers",
    persona: "Enterprise Risk Management & Cyber Insurance",
    icon: "Scale",
    summary:
      "Incorporate cyber risk seamlessly into your Enterprise Risk Management (ERM) framework. Calculate Value at Risk (VaR), stress-test cyber disaster scenarios, and negotiate optimal cyber insurance premiums.",
    primaryChallenge:
      "Lacking actuarial-grade quantitative cyber loss models, relying on subjective heatmaps (red/yellow/green) that fail to guide capital allocation.",
    risknoxImpact:
      "Provides Monte Carlo-based financial loss distributions and direct telemetry exports for cyber insurance underwriters.",
    deliverables: [
      "Cyber Value at Risk (VaR) & Probable Maximum Loss (PML) models",
      "Cyber Insurance Telemetry Verification & Policy Gap Analysis",
      "Third-Party Vendor Risk Aggregation & Portfolio Concentration Risk",
      "Regulatory Fine & Litigation Exposure Projections",
    ],
    metrics: [
      { value: "32%", label: "Average savings on cyber insurance premiums" },
      { value: "100%", label: "Empirical, data-backed ERM risk registers" },
    ],
  },
  {
    id: "cfo",
    title: "Chief Financial Officer (CFO) & Board",
    shortTitle: "CFOs & Board Members",
    persona: "Capital Allocation & Fiduciary Oversight",
    icon: "TrendingUp",
    summary:
      "Make informed cyber defense CapEx decisions with clear ROI forecasting. Understand the exact dollar exposure of every vulnerability and satisfy strict governance mandates without overspending.",
    primaryChallenge:
      "Unable to verify if millions spent on cybersecurity tooling are actually reducing financial breach risk or moving business needles.",
    risknoxImpact:
      "Directly links security investments to reduced probable financial loss, providing defensible metrics for audit committees and investors.",
    deliverables: [
      "Defensible Cyber Defense Return on Investment (ROI) Projections",
      "Quarterly Material Risk Disclosures & SEC/SEBI Filing Prep",
      "Vendor Tooling Consolidation & Redundancy Recommendations",
      "Post-Incident Liability & Recovery Cost Simulations",
    ],
    metrics: [
      { value: "2.8x", label: "Security budget ROI justification efficiency" },
      { value: "$1.4M", label: "Average redundant tooling spend eliminated" },
    ],
  },
  {
    id: "compliance",
    title: "Compliance Officers & Data Protection Officers (DPO)",
    shortTitle: "Compliance & DPO Teams",
    persona: "Audit Readiness & Regulatory Privacy",
    icon: "FileCheck2",
    summary:
      "Eliminate spreadsheet-based audit chaos. Automate evidence collection across multiple global and sovereign frameworks simultaneously, maintaining 365-day audit-readiness with zero manual friction.",
    primaryChallenge:
      "Drowning in duplicate audit requests, manual screenshot evidence gathering, and constantly shifting global privacy mandates.",
    risknoxImpact:
      "One-click evidence collection that maps a single technical control to multiple standards (e.g. ISO 27001, SOC 2, DPDPA, HIPAA) automatically.",
    deliverables: [
      "Cross-Framework Control Harmonization Matrix",
      "Automated Continuous Evidence Gathering Engine",
      "Auditor-Facing Read-Only Verification Portal",
      "DPDPA & GDPR Data Processing Agreement (DPA) Telemetry Mapping",
    ],
    metrics: [
      { value: "85%", label: "Drop in manual audit workload" },
      { value: "365d", label: "Continuous compliance posture without lapses" },
    ],
  },
  {
    id: "secops",
    title: "SecOps & Security Engineering Teams",
    shortTitle: "SecOps & Engineers",
    persona: "Threat Detection & Rapid Remediation",
    icon: "Terminal",
    summary:
      "Kill the noise. Get high-fidelity vulnerability insights enriched with real-world exploitability, asset context, and ready-to-deploy remediation scripts that integrate straight into Jira, GitHub, and Slack.",
    primaryChallenge:
      "Overwhelmed with thousands of CVE scanner alerts with no context on whether the assets are actually reachable or actively exploited in the wild.",
    risknoxImpact:
      "Prioritizes the top 2% of vulnerabilities that pose 98% of actual exploit risk, with prescriptive code and config fixes.",
    deliverables: [
      "Context-Rich External Vulnerability & Misconfiguration Feeds",
      "Validated Exploitability Telemetry & Proof-of-Concept Indicators",
      "Native Jira, ServiceNow & GitHub Automated Ticket Workflows",
      "Pre-Generated CLI & Terraform Remediation Snippets",
    ],
    metrics: [
      { value: "90%", label: "False positive reduction" },
      { value: "48hrs", label: "Average time to remediate critical exposures" },
    ],
  },
];

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    id: "exposure",
    step: "01",
    title: "Exposure Intelligence",
    subtitle: "Continuous Attack Surface & Threat Discovery",
    description:
      "Risknox operates non-intrusive external reconnaissance across your entire digital footprint — discovering unmanaged domains, shadow cloud services, leaked credentials, open ports, and vulnerable supply chains in real time.",
    icon: "Radar",
    features: [
      "Agentless, zero-configuration outside-in scanning",
      "Automated subdomain, IP, and cloud storage discovery",
      "Dark web breach credential & leaked secret telemetry",
      "Supply-chain vendor third-party security scoring",
    ],
    stats: "300,000+ digital assets scanned daily",
  },
  {
    id: "compliance",
    step: "02",
    title: "Unified Compliance Engine",
    subtitle: "Automate Evidence Across Every Standard",
    description:
      "Stop repeating audits. Map your verified technical controls once and automatically inherit evidence across SOC 2, ISO 27001, RBI CSF, DPDPA, HIPAA, and PCI-DSS without lifting a finger.",
    icon: "Layers",
    features: [
      "Pre-mapped cross-framework control harmonization",
      "Real-time drift detection and policy violation alerts",
      "Auditor-ready report generation in under 60 seconds",
      "Continuous gap analysis with step-by-step remediation",
    ],
    stats: "40+ regulatory frameworks supported natively",
  },
  {
    id: "quantification",
    step: "03",
    title: "Financial Decision Layer",
    subtitle: "Quantified Dollarized Risk for Leadership",
    description:
      "Bridge the communication divide between SecOps and the Boardroom. Translate technical telemetry into quantifiable financial impact (Value at Risk, Breach Cost, Insurance Coverage alignment) to drive smart capital allocation.",
    icon: "TrendingUp",
    features: [
      "Actuarial-grade Cyber Value at Risk (VaR) calculations",
      "Dynamic cyber insurance policy coverage gap checks",
      "Defensible security budget ROI & CapEx forecasting",
      "Interactive executive dashboards for Board & ALCO",
    ],
    stats: "$14.2M average exposure financial visibility unlocked",
  },
];

export const SOLUTION_METRICS: SolutionMetric[] = [
  {
    value: "$14.2M",
    label: "Average Exposure Identified",
    sublabel: "Discovered and quantified before threat actors exploit it",
    trend: "+99.4% visibility accuracy",
  },
  {
    value: "85%",
    label: "Audit Preparation Time Saved",
    sublabel: "Automated continuous evidence collection across all standards",
    trend: "365-day continuous audit readiness",
  },
  {
    value: "4.2x",
    label: "Faster Mean Time to Remediate",
    sublabel: "Context-aware vulnerability triage ranked by financial impact",
    trend: "From weeks to under 48 hours",
  },
  {
    value: "100%",
    label: "Cyber Insurance Alignment",
    sublabel: "Defensible posture data for lower premiums & faster underwriting",
    trend: "Empirical telemetry proofs",
  },
];
