defmodule FerretRescue.FAQ.Content.Types do
  @moduledoc """
  Defines absinthe types for faq_content schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.FAQ.Content
  alias FerretRescue.FAQ.Content.Resolver

  object :faq_content do
    field :id, non_null(:id)
    field :content, non_null(:string)
    field :rank, non_null(:integer)
    field :title, non_null(:string)
  end

  input_object :faq_content_input do
    field :topic_id, :id
    field :content, :string
    field :rank, :integer
    field :title, :string
  end

  object :faq_content_queries do
    field :faq_content, non_null(:faq_content) do
      middleware(FerretRescue.Middleware.LoadModel, module: Content)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  object :faq_content_mutations do
    field :create_faq_content, non_null(:faq_content) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      arg(:input, non_null(:faq_content_input))
      resolve(&Resolver.create/2)
    end

    field :update_faq_content, non_null(:faq_content) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Content)
      arg(:id, non_null(:id))
      arg(:input, non_null(:faq_content_input))
      resolve(&Resolver.update/2)
    end

    field :delete_faq_content, non_null(:faq_content) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Content)
      arg(:id, non_null(:id))
      resolve(&Resolver.delete/2)
    end
  end
end
