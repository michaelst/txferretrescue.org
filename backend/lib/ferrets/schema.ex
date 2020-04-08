defmodule FerretRescue.Ferret do
  @moduledoc """
  Schema for ferrets table.
  """
  use Ecto.Schema
  import Ecto.Changeset

  schema "ferrets" do
    field :age_months, :integer
    field :age_years, :integer
    field :available, :boolean
    field :bio, :string
    field :fee, :decimal
    field :foster, :boolean
    field :gender, :string
    field :image_url, :string
    field :name, :string

    timestamps()
  end

  def changeset(model, attrs) do
    model
    |> cast(attrs, __schema__(:fields) -- [:id])
    |> validate_required(__schema__(:fields) -- [:bio])
  end
end
