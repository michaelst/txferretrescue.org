defmodule FerretRescue.FAQ.Topic.Types do
  @moduledoc """
  Defines absinthe types for faq_topics schema.
  """
  use Absinthe.Schema.Notation

  import Absinthe.Resolution.Helpers, only: [dataloader: 1]

  alias FerretRescue.FAQ.Topic.Resolver

  object :faq_topic do
    field :id, non_null(:id)
    field :name, :string
    field :rank, :integer

    field :questions, :faq_content |> non_null |> list_of |> non_null, resolve: dataloader(FerretRescue)
  end

  object :faq_topic_queries do
    field :faq_topics, :faq_topic |> non_null |> list_of |> non_null do
      resolve(&Resolver.list/2)
    end
  end
end
