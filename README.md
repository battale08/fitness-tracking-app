# Fyxlife — Mini Fitness Tracking App (React Native)

## What this app implements
- Onboarding flow (Welcome → User Info → Confirmation)
- Dashboard with wellness goals (toggle complete, swap goal)
- Progress view (today / weekly history)
- Risk-o-meter: quick visual risk by body system
- Local persistence (AsyncStorage) so progress persists between restarts
- Simple streak counter
- Currently for swap goal i used the hardcoded data - "which is 10 min yoga" and not added any AI suggestion.
- Simple local storage so progress is retained after app restart. 

## Tech stack
- React Native + TypeScript
- React Navigation - Stack navigation & Tab Navigation 
- Context + useReducer for state
- AsyncStorage for data persistence
- react-native-svg for simple visuals

## How to run
1. `yarn install` or `npm install`
2. After successful setting up react native and cloning this repository you can run `npm install` and then go to ios folder using command using `cd ios` and run `pod install` and then `npx react-native run-ios` for IOS and `npx react-native run-Android` for Android to start the application on a simulator / emulator.

## What I used AI tools for
I used AI-assisted tools to help ideate UI copy and propose the AI suggestion API design. (Examples: ChatGPT to brainstorm risk-o-meter grouping; Copilot for small code suggestions). All production code and logic are written and reviewed by me.

## Project folder structure

├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ GoalCard.tsx
│  │  ├─ RiskOMeter.tsx
│  │  ├─ ProgressSummary.tsx
│  ├─ contexts/
│  │  ├─ AppProvider.tsx
│  ├─ screens/
│  │  ├─ Onboarding/
│  │  │  ├─ Welcome.tsx
│  │  │  ├─ UserInfo.tsx
│  │  │  ├─ Confirmation.tsx
│  │  ├─ Dashboard.tsx
│  │  ├─ Progress.tsx
│  │  ├─ RiskDetail.tsx
│  ├─ services/
│  │  ├─ storage.ts
│  ├─ types/
│  │  ├─ index.ts
│  ├─ utils/
│  │  ├─ goals.ts
│  ├─ App.tsx
├─ package.json
├─ README.md

## Notes & future improvements
- Replace simple risk heuristic with validated clinical model and user consent flow.
- Add biometric integrations and secure storage.
- Add unit tests and E2E tests using Detox/Playwright for mobile.
- for data persistence and global state management instead of depending on context API i will use Redux Toolkit for global state management 
- For API calling - React Query or Tanstack query which under the hood provide success , failure and loading state and automatically handle caching well

## Scaling from v0 to v1

This project represents a v0 prototype of a wellness tracking app, built with React Native and managed through a simple context-based state system. To scale it to v1, the following steps would be undertaken to enhance functionality, performance, and user experience:

1 Backend Integration:

 - Current State: v0 uses local storage (AsyncStorage) for state persistence.
 - v1 Plan: Implement a RESTful or GraphQL API backend (e.g., Node.js with MongoDB or Firebase) to store user data (goals, progress, risk scores) in the cloud. This enables multi-device sync, user authentication, and secure data management.


2 State Management:

- Current State: v0 relies on a basic useReducer for state management.
- v1 Plan: Adopt a robust state management solution like Redux Toolkit or Zustand with persistence middleware to handle complex state transitions and ensure scalability as features (e.g., social sharing, notifications) are added.


3 Dynamic Risk Model:

- Current State: v0 includes a simplistic risk score calculation based on age, activity level, and BMI.
- v1 Plan: Integrate a machine learning model (e.g., via TensorFlow.js or an external API) to predict risks using real data (vitals, lab results, family history). This would require a data pipeline and periodic score updates.


3 Performance Optimization:

- Current State: v0 uses basic components and inline SVG for visualizations.
- v1 Plan: Optimize with lazy loading for screens, memoization for components (e.g., React.memo), and a switch to a performance-optimized charting library (e.g., react-native-chart-kit) for the Risk-o-meter and progress bars.


4 Enhanced UI/UX:

- Current State: v0 features static cards and basic modals.
- v1 Plan: Introduce animations (e.g., using react-native-reanimated), a customizable theme system, and accessibility features (e.g., screen reader support). Add a tutorial onboarding flow and push notifications for goal reminders.


5 Feature Expansion:

- Current State: v0 includes goal tracking, progress, and risk assessment.
- v1 Plan: Add social features (e.g., sharing streaks), integration with wearables (e.g., Fitbit API), and AI-driven goal suggestions based on user habits and risk profiles.


6 Testing and Deployment:

- Current State: v0 lacks automated testing and is tested manually.
- v1 Plan: Implement unit tests (Jest) and end-to-end tests (Detox), set up CI/CD pipelines (e.g., GitHub Actions), and deploy to app stores with phased rollouts for user feedback.


This transition from v0 to v1 would transform the app into a production-ready solution, balancing scalability, user engagement, and data-driven insights while maintaining the motivating and friendly experience.
