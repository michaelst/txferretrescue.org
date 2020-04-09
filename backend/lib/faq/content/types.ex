defmodule FerretRescue.FAQ.Content.Types do
  @moduledoc """
  Defines absinthe types for faq_content schema.
  """
  use Absinthe.Schema.Notation

  object :faq_content do
    field :id, non_null(:id)
    field :title, :string
    field :content, :string
    field :rank, :integer
  end
end
