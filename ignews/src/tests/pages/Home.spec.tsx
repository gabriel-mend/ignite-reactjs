import { render, screen } from '@testing-library/react'
import { stripe } from '../../services/stripe'
import Home, { getStaticProps } from '../../pages'
import { mocked } from 'ts-jest/utils'

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false]
  }
})
jest.mock('../../services/stripe')


describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: '$9.90'}}/>)

    expect(screen.getByText("for $9.90 month")).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retriveStripePricesMocked = mocked(stripe.prices.retrieve)

    retriveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 10000,

    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      //contem essas informações
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$100.00'
          }
        }
      })
    )
  })
})