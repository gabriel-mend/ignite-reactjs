import { render, screen, fireEvent } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'
import { SubscribeButton } from '.'
import { useRouter } from 'next/router'

jest.mock('next/router')

jest.mock('next-auth/client')

describe('SubscribeButton component', () => {

  it('renders corectly', () => {
    
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    render(<SubscribeButton />)
  
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    const signInMocked = mocked(signIn)
    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe Now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      { user: { 
          name: 'John Doe', 
          email: 'john.doe@example.com'
        }, 
      expires: 'fake-expires',
      activeSubscription: 'fake-subscription'
      },   
      false
    ] as any)

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe Now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalled()
  })
})