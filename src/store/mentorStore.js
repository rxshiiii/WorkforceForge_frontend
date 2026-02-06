import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMentorStore = create(
  persist(
    (set) => ({
      // =========================
      // Session Info
      // =========================
      sessionId: null,
      skill: null,
      mode: null,

      // =========================
      // Mentor Progress
      // =========================
      turnCount: 0,
      difficultyLevel: 0,

      // =========================
      // Actions
      // =========================
      startSession: ({ sessionId, skill, mode }) =>
        set({
          sessionId,
          skill,
          mode,
          turnCount: 0,
          difficultyLevel: 0
        }),

      updateProgress: ({ turnCount, difficultyLevel }) =>
        set({
          turnCount,
          difficultyLevel
        }),

      resetSession: () =>
        set({
          sessionId: null,
          skill: null,
          mode: null,
          turnCount: 0,
          difficultyLevel: 0
        })
    }),
    {
      name: "workforceforge-session" // localStorage key
    }
  )
);
