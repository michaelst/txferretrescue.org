defmodule FerretRescue.Middleware.RequireAuthentication do
  @moduledoc """
  Middleware to ensure request is authenticated.
  """
  @behaviour Absinthe.Middleware

  alias Absinthe.Resolution

  def call(%{context: %{auth: true}} = resolution, _config), do: resolution
  def call(resolution, _config), do: resolution |> Resolution.put_result({:error, "unauthenticated"})
end
