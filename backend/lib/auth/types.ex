defmodule FerretRescue.Auth.Types do
  @moduledoc """
  Defines absinthe types for auth.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Auth.Resolver

  object :auth do
    field :token, non_null(:string)
  end

  object :auth_mutations do
    field :login, non_null(:auth) do
      arg(:username, non_null(:string))
      arg(:password, non_null(:string))
      resolve(&Resolver.login/2)
    end
  end
end
