import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AppState, Goal, Progress, UserProfile } from '../types';
import { loadAppState, saveAppState } from '../services/storage';

type Action =
  | { type: 'SET_PROFILE'; payload: UserProfile }
  | { type: 'COMPLETE_GOAL_TODAY'; payload: string } // goalId toggle
  | { type: 'SWAP_GOAL'; payload: { oldId: string; newGoal: Goal } }
  | { type: 'SET_ONBOARDED'; payload: boolean }
  | { type: 'LOAD_STATE'; payload: AppState }
  | { type: 'RESET' }
  | { type: 'ADD_GOAL'; payload: { title: string; target: string } };

const initialState: AppState = {
  onboarded: false,
  profile: undefined,
  goals: [
    { id: 'g1', title: 'Walk', target: '20 min walk', completedToday: false },
    { id: 'g2', title: 'Hydration', target: '8 cups water', completedToday: false },
    { id: 'g3', title: 'Stretch', target: '10 min stretch', completedToday: false },
  ],
  progress: [],
  streakDays: 0,
  riskScores: { Cardio: 20, Neuro: 12, Respiratory: 8, Digestive: 10 },
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    case 'SET_ONBOARDED':
      return { ...state, onboarded: action.payload };
      case 'COMPLETE_GOAL_TODAY': {
        const gId = action.payload;
        const goals = state.goals.map(g => g.id === gId ? { ...g, completedToday: !g.completedToday } : g);
  
        const today = new Date().toISOString().slice(0, 10);
        const existing = state.progress.find(p => p.date === today);
        let progress = state.progress.slice();
        let shouldIncrementStreak = false;
  
        if (existing) {
          const completedSet = new Set(existing.completedGoalIds);
          if (completedSet.has(gId)) {
            completedSet.delete(gId);
          } else {
            completedSet.add(gId);
            // Check if this is the first completion of the day
            if (completedSet.size === 1) shouldIncrementStreak = true;
          }
          const newRecord = { ...existing, completedGoalIds: Array.from(completedSet) };
          progress = state.progress.map(p => p.date === today ? newRecord : p);
        } else {
          progress = [...state.progress, { date: today, completedGoalIds: [gId] }];
          shouldIncrementStreak = true; // First completion of the day
        }
  
        let streakDays = state.streakDays;
        if (shouldIncrementStreak) {
          streakDays = state.streakDays + 1;
        }
  
        return { ...state, goals, progress, streakDays };
      }
    case 'SWAP_GOAL': {
      const { oldId, newGoal } = action.payload;
      const goals = state.goals.map(g => g.id === oldId ? { ...newGoal, id: oldId } : g);
      return { ...state, goals };
    }
    case 'ADD_GOAL': {
      const { title, target } = action.payload;
      const newId = `g${Date.now()}`; // Simple unique ID generation
      const newGoal: Goal = { id: newId, title, target, completedToday: false };
      return { ...state, goals: [...state.goals, newGoal] };
    }
    case 'LOAD_STATE':
      return action.payload;
    case 'RESET':
        return { ...initialState };
    default:
      return state;
  }
}

export const AppProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load saved state once
  useEffect(() => {
    (async () => {
      const saved = await loadAppState();
      if (saved) dispatch({ type: 'LOAD_STATE', payload: saved });
    })();
  }, []);

  // Persist on state change (debounce omitted for brevity)
  useEffect(() => {
    saveAppState(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
