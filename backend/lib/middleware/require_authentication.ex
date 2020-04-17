defmodule FerretRescue.Middleware.RequireAuthentication do
  @moduledoc """
  Middleware to ensure request is authenticated.
  """
  @behaviour Absinthe.Middleware

  alias Absinthe.Resolution

  def call(%{context: %{auth: auth}} = resolution, config) do
    if can?(auth, config[:permission]),
      do: resolution,
      else: Resolution.put_result(resolution, {:error, "unauthenticated"})
  end

  def call(resolution, _config), do: Resolution.put_result(resolution, {:error, "unauthenticated"})

  defp can?(auth, :manage_applications), do: auth.can_manage_applications
  defp can?(auth, :manage_users), do: auth.can_manage_users
  defp can?(auth, :manage_ferrets), do: auth.can_manage_ferrets
  defp can?(auth, :manage_website), do: auth.can_manage_website
  defp can?(_auth, _permission), do: false
end
