import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type AuthUser = {
  sub: string
  email: string
  name: string
  picture?: string
}

type AuthContextValue = {
  user: AuthUser | null
  ready: boolean
  signIn: () => void
  signOut: () => void
}

const STORAGE_KEY = "portfolio.auth.user"
const GSI_SCRIPT_ID = "google-gsi-script"

type CredentialResponse = {
  credential: string
}

type IdConfiguration = {
  client_id: string
  callback: (response: CredentialResponse) => void
  auto_select?: boolean
  cancel_on_tap_outside?: boolean
}

type GoogleAccountsId = {
  initialize: (config: IdConfiguration) => void
  prompt: (momentListener?: (notification: unknown) => void) => void
  disableAutoSelect: () => void
}

declare global {
  interface Window {
    google?: { accounts: { id: GoogleAccountsId } }
  }
}

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AuthUser) : null
  } catch {
    return null
  }
}

function parseJwt(token: string): AuthUser | null {
  try {
    const payload = token.split(".")[1]
    if (!payload) return null
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/")
    const json = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    )
    const data = JSON.parse(json) as Partial<AuthUser>
    if (typeof data.sub === "string" && typeof data.email === "string") {
      return {
        sub: data.sub,
        email: data.email,
        name: data.name || data.email,
        picture: data.picture,
      }
    }
    return null
  } catch {
    return null
  }
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser)
  const [ready, setReady] = useState(false)

  const initializeGsi = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const gsi = window.google?.accounts?.id
    if (!clientId || !gsi) return false
    gsi.initialize({
      client_id: clientId,
      callback: (response: CredentialResponse) => {
        const account = parseJwt(response.credential)
        if (account) {
          setUser(account)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(account))
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true,
    })
    return true
  }

  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
    if (!clientId) return
    if (document.getElementById(GSI_SCRIPT_ID)) {
      initializeGsi()
      setReady(true)
      return
    }
    const script = document.createElement("script")
    script.id = GSI_SCRIPT_ID
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true
    script.onload = () => {
      initializeGsi()
      setReady(true)
    }
    document.head.appendChild(script)
  }, [])

  const signIn = () => {
    if (!initializeGsi()) return
    window.google?.accounts.id.prompt()
  }

  const signOut = () => {
    try {
      window.google?.accounts.id.disableAutoSelect()
    } catch {
      /* noop */
    }
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ user, ready, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within <AuthProvider>")
  }
  return context
}