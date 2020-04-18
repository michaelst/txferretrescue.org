defmodule FerretRescue.Auth.Types do
  @moduledoc """
  Defines absinthe types for auth.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Auth
  alias FerretRescue.Auth.Resolver

  object :auth do
    field :can_manage_applications, non_null(:boolean)
    field :can_manage_ferrets, non_null(:boolean)
    field :can_manage_users, non_null(:boolean)
    field :can_manage_website, non_null(:boolean)
    field :email, non_null(:string)
    field :token, non_null(:string)
  end

  object :user do
    field :id, non_null(:id)
    field :can_manage_applications, non_null(:boolean)
    field :can_manage_ferrets, non_null(:boolean)
    field :can_manage_users, non_null(:boolean)
    field :can_manage_website, non_null(:boolean)
    field :email, non_null(:string)
  end

  input_object :create_user_input do
    field :email, non_null(:string)
  end

  input_object :update_user_input do
    field :can_manage_applications, :boolean
    field :can_manage_ferrets, :boolean
    field :can_manage_users, :boolean
    field :can_manage_website, :boolean
  end

  object :auth_queries do
    field :users, :user |> non_null |> list_of |> non_null do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_users)
      resolve(&Resolver.list/2)
    end

    field :user, non_null(:user) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_users)
      middleware(FerretRescue.Middleware.LoadModel, module: Auth)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  object :auth_mutations do
    field :login, non_null(:auth) do
      arg(:email, non_null(:string))
      arg(:password, non_null(:string))
      resolve(&Resolver.login/2)
    end

    field :reset_password, non_null(:auth) do
      arg(:password, non_null(:string))
      resolve(&Resolver.reset_password/2)
    end

    field :create_user, non_null(:user) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_users)
      arg(:input, non_null(:create_user_input))
      resolve(&Resolver.create/2)
    end

    field :update_user, non_null(:user) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_users)
      middleware(FerretRescue.Middleware.LoadModel, module: Auth)
      arg(:id, non_null(:id))
      arg(:input, non_null(:update_user_input))
      resolve(&Resolver.update/2)
    end

    field :delete_user, non_null(:user) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_users)
      middleware(FerretRescue.Middleware.LoadModel, module: Auth)
      arg(:id, non_null(:id))
      resolve(&Resolver.delete/2)
    end
  end
end
