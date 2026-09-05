import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderState | null>(null)

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"
  const stored = window.localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function ThemeProvider({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const apply = () => {
      const resolved = window.localStorage.getItem("theme") === null
        ? getInitialTheme()
        : (window.localStorage.getItem("theme") as Theme)
      const value = resolved ?? defaultTheme
      setTheme(value)
      document.documentElement.classList.toggle("dark", value === "dark")
    }
    apply()
  }, [defaultTheme])

  const setThemeValue = (next: Theme) => {
    window.localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
    setTheme(next)
  }

  const toggleTheme = () => {
    setThemeValue(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme: setThemeValue, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { ThemeProvider, useTheme }