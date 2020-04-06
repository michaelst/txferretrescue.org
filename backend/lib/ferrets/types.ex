defmodule FerretRescue.Ferret.Types do
  @moduledoc """
  Defines absinthe types for ferret schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Ferret.Resolver

  object :ferret do
    field :id, :id
    field :age_months, :integer
    field :age_years, :integer
    field :available, :boolean
    field :bio, :string
    field :fee, :string
    field :foster, :boolean
    field :gender, :string
    field :name, :string
  end

  object :ferret_queries do
    field :ferrets, list_of(:ferret) do
      arg(:foster, :boolean)
      resolve(&Resolver.list/2)
    end
  end
end
