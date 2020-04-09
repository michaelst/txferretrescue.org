defmodule FerretRescue.Resources.Sitter do
  @moduledoc """
  Schema for sitters table.
  """
  use Ecto.Schema

  schema "sitters" do
    field :name, :string
    field :phone, :string
    field :email, :string
    field :notes, :string

    timestamps()
  end
end
