import { useEffect, useState } from 'react';

const KEY = 'portfolio-theme';

/**
 * Dark/light theme. Remembers the visitor's choice, and falls back to whatever
 * their operating system prefers the first time they arrive.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // private browsing can throw on localStorage - fall through to the default
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      // not being able to remember the choice is not worth breaking the page over
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}
