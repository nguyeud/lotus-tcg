import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

let defaultTheme: Theme = 'light';

export type ThemeContextType = {
  readonly theme: Theme;
  readonly toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('====> ThemeProvider');

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = async () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error(
      'Error: To use useTheme as a context, it must be used within a ThemeProvider.'
    );
  }
  return themeContext;
};
