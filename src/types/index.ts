export type Gender = 'male'|'female'| null;

export type UserProfile = {
  name: string;
  age: number;
  phone?: string;
  gender?: Gender;
  email?: string;
  activityLevel?: 'low'|'moderate'|'high';
};

export type Goal = {
  id: string;
  title: string;
  target: string; // e.g. "20 min walk"
  completedToday?: boolean;
};

export type Progress = {
  date: string; // YYYY-MM-DD
  completedGoalIds: string[];
};

export type AppState = {
  onboarded: boolean;
  profile?: UserProfile;
  goals: Goal[];
  progress: Progress[];
  streakDays: number;
  riskScores: Record<string, number>; // e.g. { Cardio: 20, Neuro: 10 }
};
