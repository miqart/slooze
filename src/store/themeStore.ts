import { LOCAL_STORAGE_KEYS } from 'src/constants.ts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme-storage');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let shouldBeDark = false;

  if (savedTheme) {
    try {
      const parsedTheme = JSON.parse(savedTheme);
      shouldBeDark = parsedTheme.state?.isDarkMode ?? false;
    } catch {
      shouldBeDark = prefersDark;
    }
  } else {
    shouldBeDark = prefersDark;
  }

  const root = document.documentElement;
  if (shouldBeDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  return shouldBeDark;
};

export const useThemeStore = create<IThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: initializeTheme(),
      toggleTheme: () => {
        set((state) => {
          const newIsDarkMode = !state.isDarkMode;
          const root = document.documentElement;

          if (newIsDarkMode) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }

          return { isDarkMode: newIsDarkMode };
        });
      },
    }),
    {
      name: LOCAL_STORAGE_KEYS.theme,
      partialize: (state) => ({ isDarkMode: state.isDarkMode }),
    }
  )
);
