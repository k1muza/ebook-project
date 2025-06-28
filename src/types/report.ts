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

export interface ReportData {
  organization: string;
  reportTitle: string;
  period: string;
  guidingPrinciple: string;
  mission: string;
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
  highlights?: HighlightStat[];
  highlightsTitle: string;
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
    caption: string;
  };
}