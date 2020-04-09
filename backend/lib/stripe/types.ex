defmodule FerretRescue.Stripe.Types do
  @moduledoc """
  Defines absinthe types for stripe schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Stripe.Resolver

  object :stripe_checkout_session do
    field(:id, non_null(:id))
  end

  object :stripe_queries do
    field :stripe_checkout_session, non_null(:stripe_checkout_session) do
      arg(:amount, non_null(:integer))
      resolve(&Resolver.stripe_checkout_session/2)
    end
  end
end
