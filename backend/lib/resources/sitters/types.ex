defmodule FerretRescue.Resources.Sitter.Types do
  @moduledoc """
  Defines absinthe types for sitters schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Resources.Sitter
  alias FerretRescue.Resources.Sitter.Resolver

  object :sitter do
    field :id, non_null(:id)
    field :email, :string
    field :name, non_null(:string)
    field :notes, :string
    field :phone, :string
  end

  input_object :sitter_input do
    field :email, :string
    field :name, non_null(:string)
    field :notes, :string
    field :phone, :string
  end

  object :sitter_queries do
    field :sitters, :sitter |> non_null |> list_of |> non_null do
      resolve(&Resolver.list/2)
    end

    field :sitter, non_null(:sitter) do
      middleware(FerretRescue.Middleware.LoadModel, module: Sitter)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  object :sitter_mutations do
    field :create_sitter, non_null(:sitter) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      arg(:input, non_null(:sitter_input))
      resolve(&Resolver.create/2)
    end

    field :update_sitter, non_null(:sitter) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Sitter)
      arg(:id, non_null(:id))
      arg(:input, non_null(:sitter_input))
      resolve(&Resolver.update/2)
    end

    field :delete_sitter, non_null(:sitter) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Sitter)
      arg(:id, non_null(:id))
      resolve(&Resolver.delete/2)
    end
  end
end
