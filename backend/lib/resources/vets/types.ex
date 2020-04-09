defmodule FerretRescue.Resources.Vet.Types do
  @moduledoc """
  Defines absinthe types for vets schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Resources.Vet.Resolver

  object :vet do
    field :id, non_null(:id)
    field :name, :string
    field :website, :string
    field :vet_name, :string
    field :street, :string
    field :city, :string
    field :state, :string
    field :zip, :string
    field :phone, :string
    field :notes, :string
  end

  object :vet_queries do
    field :vets, :vet |> non_null |> list_of |> non_null do
      resolve(&Resolver.list/2)
    end
  end
end
