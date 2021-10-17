import { createContext, ReactNode } from "react";
import { api } from "../services/api";

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  singIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false

  async function singIn({ email, password }: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password
    })

    console.log(response.data)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  )
}