defmodule FerretRescue.Auth.Resolver do
  @moduledoc """
  Resolver for auth.
  """

  alias FerretRescue.Auth.Guardian

  def login(%{username: username, password: password}, _resolution) do
    if Application.get_env(:ferret_rescue, :login_verification) == "#{username}:#{password}" do
      {:ok, token, _claims} = Guardian.encode_and_sign(username)

      {:ok, %{token: token}}
    else
      {:error, :invalid}
    end
  end
end
