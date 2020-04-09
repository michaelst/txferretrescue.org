defmodule FerretRescue.Resources.Vet do
  @moduledoc """
  Schema for vets table.
  """
  use Ecto.Schema

  schema "vets" do
    field :company_name, :string
    field :website, :string
    field :vet_name, :string
    field :street, :string
    field :city, :string
    field :state, :string
    field :zip, :string
    field :phone, :string
    field :notes, :string

    timestamps()
  end
end
