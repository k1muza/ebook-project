// types/report.ts
export interface Section {
  title: string;
  content: ContentItem[];
}

export type ContentItem =
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string; author: string }
  | { type: 'list'; items: string[] }
  | { type: 'subheading'; text: string }
  | { type: 'bold'; text: string }
  | {
      classes: any;
      type: 'image';
      src: string;
      alt: string;
      layout?: 'full' | 'split';
      caption: string
    }
  | {
      type: 'imagePair';
      images: {
        src: string;
        alt: string;
        caption: string;
      }[];
      layout?: 'full' | 'split';
    };

export interface Milestone {
  title: string;
  description: string;
}

export interface CoreGoal {
  title: string;
  description: string;
}

export interface MapLocation {
  name: string
  lat: number
  lng: number
}

export interface HighlightStat {
  label: string
  value: number
  icon?: string
}

export interface FinancialEntry {
  item: string
  amount: string
}

export interface IncomeStatement {
  revenue: FinancialEntry[]
  expenses: FinancialEntry[]
}

export interface FinancialMetric {
  label: string
  value: string
  change?: 'positive' | 'negative'
  icon?: string
  description?: string
}

export interface InfographicStat {
  value: string
  label: string
  icon: string
  color: string
}

export interface InfographicConnectionNode {
  label: string
  icon: string
  angle: number
  color: string
}

export interface InfographicSection {
  title: string
  icon: string
  color: string
  stats: InfographicStat[]
  connections: {
    centerLabel: string
    nodes: InfographicConnectionNode[]
  }
}

export interface InfographicData {
  sections: {
    impact: InfographicSection
  }
}

export interface ReportData {
  financialPointsHeading?: string;
  pageTitle: string;
  pageDescription: string;
  organization: string;
  reportTitle: string;
  period: string;
  guidingPrinciple: string;
  mission: string;
  logoImage?: {
    src: string;
    alt: string;
  };
  coverImage?: {
    src: string;
    alt: string;
  };
  tocTitle: string;
  infographic: InfographicData;
  message: {
    title: string;
    content: (string | ContentItem)[]; // Allow mixed content types
  };
  milestones: Milestone[];
  impactTitle: string;
  strategicVision: {
    intro: string;
    educationHeading: string;
    educationGoals: CoreGoal[];
    businessHeading: string;
    businessGoals: CoreGoal[];
  };
  strategicVisionTitle: string;
  highlightsTitle: string;
  highlights?: HighlightStat[];
  financialsTitle: string;
  financialMetrics?: FinancialMetric[];
  financialPoints?: string[];
  expenditureIncreaseSummary?: string;
  expenditureIncreaseReasons?: string[];
  financialIntro?: string;
  financials?: IncomeStatement;
  totalRevenueAmount?: string;
  totalRevenueHeading?: string;
  programInvestmentAmount?: string;
  programInvestmentHeading?: string;
  programInvestmentNote?: string;
  netImpactAmount?: string;
  netImpactHeading?: string;
  netIncomeAmount?: string;
  netSurplusText?: string;
  netDeficitText?: string;
  incomeStatementHeading?: string;
  incomeStatementItemHeading?: string;
  incomeStatementAmountHeading?: string;
  incomeStatementRevenueLabel?: string;
  incomeStatementExpensesLabel?: string;
  incomeStatementNetLabel?: string;
  financialAuditNote?: string;
  financialAllocationHeading?: string;
  financialAllocationText?: string;
  sections: Section[];
  futureGoals: string[];
  futureGoalsTitle: string;
  futureVisionImage?: {
    src: string;
    alt: string;
    caption: string;
  };
  locations: MapLocation[]
  locationsTitle: string;
  closing: string;
  closingTitle: string;
  closingImage?: { // Optional closing image
    src: string;
    alt: string;
    classes?: string;
    caption: string;
  };
}