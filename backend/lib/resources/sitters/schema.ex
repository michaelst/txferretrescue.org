defmodule FerretRescue.Resources.Sitter do
  @moduledoc """
  Schema for sitters table.
  """
  use Ecto.Schema

  import Ecto.Changeset

  schema "sitters" do
    field :email, :string
    field :name, :string
    field :notes, :string
    field :phone, :string

    timestamps()
  end

  def changeset(struct, params) do
    struct
    |> cast(params, __schema__(:field) -- [:id])
    |> validate_required([:name])
  end
end
