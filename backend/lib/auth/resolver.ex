defmodule FerretRescue.Auth.Resolver do
  @moduledoc """
  Resolver for auth.
  """
  import Ecto.Query

  alias FerretRescue.Auth
  alias FerretRescue.Auth.Guardian
  alias FerretRescue.Repo

  def login(%{email: email, password: password}, _resolution) do
    with %Auth{} = auth <- Repo.get_by(Auth, email: email),
         true <- Bcrypt.verify_pass(password, auth.password),
         {:ok, token, _} <- Guardian.encode_and_sign(auth) do
      {:ok, Map.put(auth, :token, token)}
    else
      _error -> {:error, "invalid"}
    end
  end

  def list(_args, _resolution) do
    users = from(Auth, order_by: :email) |> Repo.all()

    {:ok, users}
  end

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def create(%{input: params}, _resolution) do
    %Auth{}
    |> Auth.changeset(params)
    |> Repo.insert()
  end

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Auth.changeset(params)
    |> Repo.update()
  end

  def delete(_args, %{context: %{model: model}}) do
    Repo.delete(model)
  end
end
