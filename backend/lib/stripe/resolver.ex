defmodule FerretRescue.Stripe.Resolver do
  @moduledoc """
  Resolver for Stripe.
  """
  defp session_module do
    Application.get_env(:ferret_rescue, :stripe_session_module, Stripe.Session)
  end

  def stripe_checkout_session(%{amount: amount}, _resolution) do
    session_module().create(%{
      cancel_url: "https://txferretrescue.org",
      success_url: "https://txferretrescue.org",
      payment_method_types: ["card"],
      mode: "payment",
      submit_type: "donate",
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
