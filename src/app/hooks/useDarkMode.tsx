// hooks/useDarkMode.tsx
import { useState, useEffect } from 'react';

interface DarkMode {
  value: boolean; // True for dark mode, false for light mode
  toggle: () => void;
}

const useDarkMode = (): DarkMode => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  useEffect(() => {
    const handlePreferenceChange = () => {
      setIsDarkMode(
        // Check for system preference or user preference stored elsewhere
        // For example, using the `prefers-color-scheme` media query
        window.matchMedia('(prefers-color-scheme: dark)').matches ||
          localStorage.getItem('darkMode') === 'true'
      );
    };

    window.addEventListener('storage', handlePreferenceChange);

    return () => window.removeEventListener('storage', handlePreferenceChange);
  }, []);

  return { value: isDarkMode, toggle };
};

export default useDarkMode;
