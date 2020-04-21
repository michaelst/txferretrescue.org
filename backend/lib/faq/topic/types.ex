defmodule FerretRescue.FAQ.Topic.Types do
  @moduledoc """
  Defines absinthe types for faq_topics schema.
  """
  use Absinthe.Schema.Notation
  import Absinthe.Resolution.Helpers, only: [dataloader: 1]

  alias FerretRescue.FAQ.Topic
  alias FerretRescue.FAQ.Topic.Resolver

  object :faq_topic do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :rank, non_null(:integer)

    field :questions, :faq_content |> non_null |> list_of |> non_null, resolve: dataloader(FerretRescue)
  end

  input_object :faq_topic_input do
    field :name, :string
    field :rank, :integer
  end

  object :faq_topic_queries do
    field :faq_topics, :faq_topic |> non_null |> list_of |> non_null do
      resolve(&Resolver.list/2)
    end

    field :faq_topic, non_null(:faq_topic) do
      middleware(FerretRescue.Middleware.LoadModel, module: Topic)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  object :faq_topic_mutations do
    field :create_faq_topic, non_null(:faq_topic) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      arg(:input, non_null(:faq_topic_input))
      resolve(&Resolver.create/2)
    end

    field :update_faq_topic, non_null(:faq_topic) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Topic)
      arg(:id, non_null(:id))
      arg(:input, non_null(:faq_topic_input))
      resolve(&Resolver.update/2)
    end

    field :delete_faq_topic, non_null(:faq_topic) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Topic)
      arg(:id, non_null(:id))
      resolve(&Resolver.delete/2)
    end
  end
end
