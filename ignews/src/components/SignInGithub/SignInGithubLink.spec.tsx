import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'
import { SignInGithub } from '.'

jest.mock('next-auth/client')

describe('SignInGithub component', () => {
  it('renders corectly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInGithub />)
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('renders corectly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([{ user: 
      { name: 'John Doe', email: 'john.doe@example.com'}, 
      expires: 'fake-expires'}, 
      false
    ])

    render( 
      <SignInGithub />
    )
  
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})