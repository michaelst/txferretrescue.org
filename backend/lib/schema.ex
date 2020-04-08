defmodule FerretRescue.Schema do
  @moduledoc """
  Absinthe schema file.
  """
  use Absinthe.Schema

  import_types(FerretRescue.Ferret.Types)

  query do
    import_fields(:ferret_queries)
  end
end
