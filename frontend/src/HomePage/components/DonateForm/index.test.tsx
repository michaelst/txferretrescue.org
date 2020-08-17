import React from 'react'
import { render, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GET_STRIPE_CHECKOUT_SESSION, DonateForm } from './'
import { MockedProvider } from '@apollo/client/testing'

const mocks = [
  {
    request: {
      query: GET_STRIPE_CHECKOUT_SESSION,
      variables: {
        amount: 1500,
      },
    },
    result: {
      data: {
        stripeCheckoutSession: {
          "__typename": "StripeCheckoutSession",
          "id": "cs_test_vOr7knGgqO9fIZzZr1lynP1rWWzyvM3zKy93zxWfgWy5gW3HLF74g9A8"
        }
      }
    },
  },
]

test('interact with DonateForm', async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={mocks}>
      <DonateForm />
    </MockedProvider>
  )

  const button = getByTestId('donate-button')
  const input = getByTestId('donate-amount-input')
  userEvent.type(input, '15.00')

  await act(async () => {
    userEvent.click(button)

    await waitFor(() => {
      const linkElement = getByText(/Redirecting to Stripe/i)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
