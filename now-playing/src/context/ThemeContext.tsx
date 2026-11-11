import { createContext, useContext, useState } from 'react'

type Theme = 'late-night' | 'daylight'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('late-night')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'late-night' ? 'daylight' : 'late-night'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}