// context/todoContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import Variables from '../styles/variables';

export type themeOptions = 'light' | 'dark';

interface ThemeProps {
  theme: themeOptions;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProps>({
  theme: 'dark',
  toggleTheme: () => {
    return;
  },
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<themeOptions>('dark');

  const toggleTheme = () => {
    setTheme((prev) => {
      localStorage.setItem('theme', prev === 'light' ? 'dark' : 'light');
      return prev === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme === 'light' ? 'light' : 'dark');
    }
    //  else {
    //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    //   setTheme(mediaQuery.matches ? 'dark' : 'light');
    // }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Variables theme={theme} />

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
