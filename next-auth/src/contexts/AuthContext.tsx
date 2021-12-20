import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from '../services/apiClient';

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
  singOut: () => void
  isAuthenticated: boolean
  user: User
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function singOut () {
  destroyCookie(undefined, 'nextauth.token')
  destroyCookie(undefined, 'nextauth.refreshToken')

  authChannel.postMessage('singOut')

  Router.push('/')
} 

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')
    
    authChannel.onmessage = (message) => {
      console.log(message)
    }
  }, [])

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if(token) {
      api.get<User>('/me')
        .then(response => {
          const { email, permissions, roles } = response.data

          setUser({ email, permissions, roles })
        }).catch(() => {
          singOut()
        }) 
    }
  }, [])

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

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('dashboard')
    } catch(error) {
      console.log(error)
    }    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, singIn, user, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}