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
  | { type: 'bold'; text: string };

export interface Milestone {
  title: string;
  description: string;
}

export interface CoreGoal {
  title: string;
  description: string;
}

export interface ReportData {
  organization: string;
  reportTitle: string;
  period: string;
  guidingPrinciple: string;
  mission: string;
  message: {
    title: string;
    content: string[];
  };
  milestones: Milestone[];
  strategicVision: {
    intro: string;
    educationGoals: CoreGoal[];
    businessGoals: CoreGoal[];
  };
  sections: Section[];
  futureGoals: string[];
  closing: string;
}