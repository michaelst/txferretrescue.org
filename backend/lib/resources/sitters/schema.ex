defmodule FerretRescue.Resources.Sitter do
  @moduledoc """
  Schema for sitters table.
  """
  use Ecto.Schema

  schema "sitters" do
    field :email, :string
    field :name, :string
    field :notes, :string
    field :phone, :string

    timestamps()
  end
end
