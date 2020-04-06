defmodule FerretRescue.Ferret.Types do
  @moduledoc """
  Defines absinthe types for ferret schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Ferret.Resolver

  object :ferret do
    field :id, non_null(:id)
    field :age_months, non_null(:integer)
    field :age_years, non_null(:integer)
    field :available, non_null(:boolean)
    field :bio, :string
    field :fee, non_null(:string)
    field :foster, non_null(:boolean)
    field :gender, non_null(:string)
    field :name, non_null(:string)
  end

  object :ferret_queries do
    field :ferrets, :ferret |> non_null |> list_of |> non_null do
      arg(:foster, :boolean)
      resolve(&Resolver.list/2)
    end
  end
end
