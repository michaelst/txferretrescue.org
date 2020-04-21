defmodule FerretRescue.FAQ.Content do
  @moduledoc """
  Schema for faq_content table.
  """
  use Ecto.Schema
  import Ecto.Changeset

  schema "faq_content" do
    field :title, :string
    field :content, :string
    field :rank, :integer

    belongs_to :topic, FerretRescue.FAQ.Topic

    timestamps()
  end

  def changeset(struct, params) do
    struct
    |> cast(params, __schema__(:fields) -- [:id])
    |> validate_required([:title, :content, :rank, :topic_id])
  end
end
