defmodule FerretRescue.FAQ.Content do
  @moduledoc """
  Schema for faq_content table.
  """
  use Ecto.Schema

  schema "faq_content" do
    field :title, :string
    field :content, :string
    field :rank, :integer

    belongs_to :topic, FerretRescue.FAQ.Topic

    timestamps()
  end
end
