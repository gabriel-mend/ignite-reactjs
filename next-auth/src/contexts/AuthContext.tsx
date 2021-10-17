import Router from 'next/router'
import { setCookie } from 'nookies';
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type User = {
  email: string
  permissions: string[]
  roles: string[]

}

type SingInRequest = {
  token: string
  refreshToken: string
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  singIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  user: User
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  async function singIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<SingInRequest>('/sessions', {
        email,
        password
      })
      
      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setUser({
        email,
        permissions,
        roles
      })

      Router.push('dashboard')
    } catch(error) {
      console.log(error)
    }

    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, singIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}