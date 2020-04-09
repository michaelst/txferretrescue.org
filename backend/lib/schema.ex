defmodule FerretRescue.Schema do
  @moduledoc """
  Absinthe schema file.
  """
  use Absinthe.Schema

  import_types(FerretRescue.Ferret.Types)
  import_types(FerretRescue.Stripe.Types)

  query do
    import_fields(:ferret_queries)
    import_fields(:stripe_queries)
  end
end
