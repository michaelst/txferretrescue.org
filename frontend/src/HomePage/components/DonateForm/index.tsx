import React, { useState } from 'react'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { loadStripe } from '@stripe/stripe-js'
import { gql, useLazyQuery } from '@apollo/client'
import { GetStripeCheckoutSession } from './graphql/GetStripeCheckoutSession'

export const GET_STRIPE_CHECKOUT_SESSION = gql`
query GetStripeCheckoutSession($amount: Int!) {
  stripeCheckoutSession(amount: $amount) {
    id
  }
}
`

const stripePublicKey = process.env.NODE_ENV === 'production' ? 'pk_live_HqxP68DVWboD0yL65DJoWizs' : 'pk_test_cUSmWw5bR0vOjLC2Eg75Etej'

const openStripeCheckout = async (checkout_session_id: string) => {
  const stripe = await loadStripe(stripePublicKey)

  await stripe?.redirectToCheckout({ sessionId: checkout_session_id })
}

export function DonateForm() {
  const [amount, setAmount] = useState('')
  const amountCents = Math.round(parseFloat(amount) * 100)
  const [getStripeCheckoutSession, { data }] = useLazyQuery<GetStripeCheckoutSession>(GET_STRIPE_CHECKOUT_SESSION)

  if (data && data.stripeCheckoutSession && amount) {
    openStripeCheckout(data.stripeCheckoutSession.id)
    return <div className="DonateForm text-center">
      <ContentBox>
        Redirecting to Stripe
      </ContentBox>
    </div>
  }

  return (
    <div className="DonateForm text-center">
      <ContentBox>
        <form className="d-flex align-items-center">
          <label className="mr-2 mt-2">
            $ <input
              value={amount}
              onChange={event => setAmount(event.target.value)}
              type="text"
              name="amount"
              placeholder="amount"
              data-testid="donate-amount-input"
            />
          </label>
          <Button
            className="btn-success"
            onClick={() => getStripeCheckoutSession({ variables: { amount: amountCents } })}
            data-testid="donate-button"
          >
            Donate
          </Button>
        </form>
      </ContentBox>
    </div>
  )
}
