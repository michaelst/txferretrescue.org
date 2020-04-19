defmodule FerretRescue.Resources.Vet.Types do
  @moduledoc """
  Defines absinthe types for vets schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Resources.Vet
  alias FerretRescue.Resources.Vet.Resolver

  object :vet do
    field :id, non_null(:id)
    field :city, :string
    field :company_name, :string
    field :notes, :string
    field :phone, :string
    field :state, :string
    field :street, :string
    field :vet_name, :string
    field :website, :string
    field :zip, :string
  end

  input_object :vet_input do
    field :city, :string
    field :company_name, :string
    field :notes, :string
    field :phone, :string
    field :state, :string
    field :street, :string
    field :vet_name, :string
    field :website, :string
    field :zip, :string
  end

  object :vet_queries do
    field :vets, :vet |> non_null |> list_of |> non_null do
      resolve(&Resolver.list/2)
    end

    field :vet, non_null(:vet) do
      middleware(FerretRescue.Middleware.LoadModel, module: Vet)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  object :vet_mutations do
    field :create_vet, non_null(:vet) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      arg(:input, non_null(:vet_input))
      resolve(&Resolver.create/2)
    end

    field :update_vet, non_null(:vet) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Vet)
      arg(:id, non_null(:id))
      arg(:input, non_null(:vet_input))
      resolve(&Resolver.update/2)
    end

    field :delete_vet, non_null(:vet) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_website)
      middleware(FerretRescue.Middleware.LoadModel, module: Vet)
      arg(:id, non_null(:id))
      resolve(&Resolver.delete/2)
    end
  end
end
