import { writable } from 'svelte/store';

const createThemeStore = () => {
  const { subscribe, set, update } = writable('dark');

  return {
    subscribe,
    toggle() {
      update(current => {
        const newTheme = current === 'dark' ? 'light' : 'dark';
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return newTheme;
      });
    },
    initialize: () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = prefersDark ? 'dark' : 'light';
      set(theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
}

export const theme = createThemeStore();