
export interface SentimentData {
  Positive: number | string;
  Negative: number | string;
  Neutral: number | string;
}

export interface SourceData {
  type: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface GeographyData {
  country: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface StakeholderData {
  group: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface DrugClassData {
  type: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface PatientJourneyStage {
  stage: string;
  Positive: number;
  Negative: number;
  Neutral: number;
}

export interface DrugStakeholderData {
  drugName: string;
  attributes: StakeholderAttribute[];
}

export interface StakeholderAttribute {
  stakeholder: string;
  mentions: number;
  Positive: number;
  PositivePct: string;
  Negative: number;
  NegativePct: string;
  Neutral: number;
  NeutralPct: string;
}

export const keyInsights = {
  painPoints: [
    "Delayed diagnosis is a major concern, with patients reporting multiple visits before proper diagnosis",
    "Treatment escalation often needed, indicating unmet needs in initial therapy",
    "Switching driven by insurance rather than clinical need causes frustration",
    "Cost barriers prevent access to biologics for many patients",
  ],
  unmetNeeds: [
    "Better early detection and awareness programs needed",
    "More affordable biologic options for patients",
    "Simplified treatment regimens to improve adherence",
    "Patient education on symptom recognition and management",
  ],
  opportunities: [
    "Digital health tools for symptom monitoring and early intervention",
    "Patient support programs to improve adherence and persistence",
    "Real-world evidence generation to support treatment pathways",
    "Biosimilars and generic options to improve access",
  ],
};
