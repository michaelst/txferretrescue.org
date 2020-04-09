defmodule FerretRescue.Stripe.Types.StripeCheckoutSessionTest do
  use ExUnit.Case, async: true

  import Hammox

  setup :verify_on_exit!

  test "get stripe checkout session" do
    expect(Stripe.SessionMock, :create, fn %{} ->
      {:ok,
       %Stripe.Session{
         billing_address_collection: nil,
         cancel_url: "http://localhost:3000",
         client_reference_id: nil,
         customer: nil,
         customer_email: nil,
         display_items: [
           %{
             amount: 1500,
             currency: "usd",
             custom: %{description: nil, images: nil, name: "Donation"},
             quantity: 1,
             type: "custom"
           }
         ],
         id: "cs_test_vOr7knGgqO9fIZzZr1lynP1rWWzyvM3zKy93zxWfgWy5gW3HLF74g9A8",
         livemode: false,
         locale: nil,
         mode: "payment",
         object: "checkout.session",
         payment_intent: "pi_1GVqWzKrqAmurKVMoh2XABHo",
         payment_method_types: ["card"],
         setup_intent: nil,
         submit_type: "donate",
         subscription: nil,
         success_url: "http://localhost:3000"
       }}
    end)

    doc = """
    query {
      stripeCheckoutSession(amount: 1500) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "stripeCheckoutSession" => %{
                  "id" => "cs_test_vOr7knGgqO9fIZzZr1lynP1rWWzyvM3zKy93zxWfgWy5gW3HLF74g9A8"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
