defmodule FerretRescue.Plug.Auth do
  @moduledoc """
  If an authorization token is passed in the request this plug will add auth
  to context for absinthe.
  """

  import Plug.Conn

  alias FerretRescue.Auth
  alias FerretRescue.Auth.Guardian

  def init(opts), do: opts

  def call(conn, _opts \\ []) do
    case get_req_header(conn, "authorization") do
      ["Bearer " <> token] -> maybe_authenticate(conn, token)
      _headers -> conn
    end
  end

  defp maybe_authenticate(conn, token) do
    token
    |> Guardian.resource_from_token()
    |> assign_resource(conn)
  end

  defp assign_resource({:ok, %Auth{} = auth, _claims}, conn),
    do: Absinthe.Plug.put_options(conn, context: %{auth: auth})

  defp assign_resource(_guardian_result, conn), do: conn
end
