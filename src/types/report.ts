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
      type: 'image'; 
      src: string; 
      alt: string; 
      layout?: 'full' | 'split'; 
      caption: string 
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

export interface ReportData {
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
  financialIntro?: string;
  financials?: IncomeStatement;
  totalRevenueHeading?: string;
  programInvestmentHeading?: string;
  programInvestmentNote?: string;
  netImpactHeading?: string;
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
  timelineTitle: string;
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