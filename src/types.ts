export interface ScreenshotInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AppFeature {
  number: string;
  title: string;
  description: string;
  highlight: string;
}
