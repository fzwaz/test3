export interface IndustrySolution {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  icon: string;
  description: string;
  complianceStandards: string[];
  threatVector: string;
  averageExposure: string;
  keyCapabilities: {
    title: string;
    description: string;
  }[];
  stat: {
    value: string;
    label: string;
  };
}

export interface RoleSolution {
  id: string;
  title: string;
  shortTitle: string;
  persona: string;
  icon: string;
  summary: string;
  primaryChallenge: string;
  risknoxImpact: string;
  deliverables: string[];
  metrics: {
    value: string;
    label: string;
  }[];
}

export interface SolutionPillar {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  stats: string;
}

export interface SolutionMetric {
  value: string;
  label: string;
  sublabel: string;
  trend?: string;
}
