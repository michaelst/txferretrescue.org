defmodule FerretRescue.Resources.Sitter.Types do
  @moduledoc """
  Defines absinthe types for sitters schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Resources.Sitter.Resolver

  object :sitter do
    field :id, non_null(:id)
    field :email, :string
    field :name, :string
    field :notes, :string
    field :phone, :string
  end

  object :sitter_queries do
    field :sitters, :sitter |> non_null |> list_of |> non_null do
      resolve(&Resolver.list/2)
    end
  end
end
