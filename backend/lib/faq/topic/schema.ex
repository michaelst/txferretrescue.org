defmodule FerretRescue.FAQ.Topic do
  @moduledoc """
  Schema for faq_content table.
  """
  use Ecto.Schema
  import Ecto.Changeset

  schema "faq_topics" do
    field :name, :string
    field :rank, :integer

    has_many :questions, FerretRescue.FAQ.Content

    timestamps()
  end

  def changeset(struct, params) do
    struct
    |> cast(params, __schema__(:fields) -- [:id])
    |> validate_required([:name, :rank])
  end
end
