defmodule FerretRescue.FAQ.Topic do
  @moduledoc """
  Schema for faq_content table.
  """
  use Ecto.Schema

  schema "faq_topics" do
    field :name, :string
    field :rank, :integer

    has_many :questions, FerretRescue.FAQ.Content

    timestamps()
  end
end
