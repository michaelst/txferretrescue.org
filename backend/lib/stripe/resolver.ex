defmodule FerretRescue.Stripe.Resolver do
  @moduledoc """
  Resolver for Stripe.
  """

  alias Stripe.Session

  def stripe_checkout_session(%{amount: amount}, _resolution) do
    Session.create(%{
      cancel_url: "http://localhost:3000",
      success_url: "http://localhost:3000",
      payment_method_types: [:card],
      mode: :payment,
      submit_type: :donate,
      line_items: [
        %{
          amount: amount,
          currency: "USD",
          name: "Donation",
          quantity: 1
        }
      ]
    })
  end
end
