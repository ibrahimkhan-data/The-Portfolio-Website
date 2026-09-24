export interface QuickFact {
  label: string;
  value: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface LearningStep {
  step: string;
  title: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: string;
}
