export type TermId = 'prelim' | 'midterm' | 'semi-finals' | 'finals';

export interface TermTheme {
  id: TermId;
  sectionBg: string;
  cardBg: string;
  cardHoverBg: string;
  bannerBg: string;
  bannerText: string;
  bannerSubtext: string;
  accentBg: string;
  accentText: string;
  borderColor: string;
  softSurface: string;
  colorLabel: string;
}

export interface TermMeta {
  id: TermId;
  label: string;
  roman: string;
  subtitle: string;
  periodSummary: string;
}

export interface CoverMetadata {
  websiteTitle: string;
  studentName: string;
  courseSection: string;
  subjectName: string;
  teacherName: string;
  academicYear: string;
}

export interface LessonExample {
  id: string;
  title: string;
  statement: string;
  explanation: string;
  segmentA?: string;
  labelA?: string;
  segmentB?: string;
  labelB?: string;
}

export interface ComparisonTable {
  title: string;
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface QuizQuestion {
  id: string;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export type DiagramType =
  | 'katangian-wika'
  | 'barayti-wika'
  | 'alpabeto-ortograpiya'
  | 'pantig-paguulit'
  | 'sugnay-builder'
  | 'kayarian-pangungusap'
  | 'diskurso-retorika'
  | 'pananaliksik-it';

export interface KeyConcept {
  term: string;
  meaning: string;
}

export interface Lesson {
  id: string;
  number: string;
  term: TermId;
  classroomRef: string;
  postedDate: string;
  title: string;
  subtitle: string;
  readingMinutes: number;
  summary: string;
  discussion: string[];
  keyConcepts: KeyConcept[];
  examples: LessonExample[];
  imagePath: string;
  imageAlt: string;
  imageCaption: string;
  diagramType: DiagramType;
  table: ComparisonTable;
  extraActivity: {
    title: string;
    instructions: string;
    samplePrompt: string;
  };
  quiz: QuizQuestion[];
}
