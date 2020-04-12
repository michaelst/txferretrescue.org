defmodule FerretRescue.Auth.Resolver do
  @moduledoc """
  Resolver for auth.
  """

  def login(%{username: username, password: password}, _resolution) do
    if Application.get_env(:ferret_rescue, :login_verification) == "#{username}:#{password}" do
      {:ok, token, _claims} = FerretRescue.Auth.Guardian.encode_and_sign(username)

      {:ok, %{token: token}}
    else
      {:error, :invalid}
    end
  end
end
