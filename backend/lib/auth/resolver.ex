defmodule FerretRescue.Auth.Resolver do
  @moduledoc """
  Resolver for auth.
  """
  import Ecto.Query

  alias FerretRescue.Auth
  alias FerretRescue.Auth.Guardian
  alias FerretRescue.Email
  alias FerretRescue.Mailer
  alias FerretRescue.Repo

  def login(%{email: email, password: password}, _resolution) do
    with %Auth{} = auth <- Repo.get_by(Auth, email: email),
         true <- Bcrypt.verify_pass(password, auth.password),
         {:ok, token, _} <- Guardian.encode_and_sign(auth) do
      {:ok, %{token: token}}
    else
      _error -> {:error, "invalid"}
    end
  end

  def reset_password(%{password: password}, %{context: %{auth: auth}}) do
    with changeset <- Auth.changeset(auth, %{password: password}),
         {:ok, auth} <- Repo.update(changeset),
         {:ok, token, _} <- Guardian.encode_and_sign(auth) do
      {:ok, %{token: token}}
    else
      error -> error
    end
  end

  def reset_password(_args, _resolution), do: {:error, :missing_token}

  def send_password_reset(_args, %{context: %{model: model}}) do
    model
    |> Email.set_password()
    |> Mailer.deliver_now()

    {:ok, model}
  end

  def list(_args, %{context: %{auth: %{id: id}}}) do
    users = from(a in Auth, where: a.id != ^id, order_by: :email) |> Repo.all()

    {:ok, users}
  end

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def current_user(_args, %{context: %{auth: auth}}), do: {:ok, auth}

  def create(%{input: params}, _resolution) do
    %Auth{}
    |> Auth.changeset(params)
    |> Repo.insert()
    |> case do
      {:ok, auth} ->
        auth
        |> Email.set_password()
        |> Mailer.deliver_now()

        {:ok, auth}

      response ->
        response
    end
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
