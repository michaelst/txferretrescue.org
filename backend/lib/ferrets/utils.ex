defmodule FerretRescue.Ferret.Utils do
  @moduledoc """
  Utils for working with ferret schema.
  """

  alias FerretRescue.Ferret
  alias FerretRescue.Repo
  alias GoogleApi.Storage.V1.Api.Objects
  alias GoogleApi.Storage.V1.Connection
  alias GoogleApi.Storage.V1.Model.Object
  alias Goth.Token

  def upload_image(ferret, %{image_upload: %Plug.Upload{} = file}) do
    {:ok, %{token: token}} = Token.for_scope("https://www.googleapis.com/auth/devstorage.full_control")

    token
    |> Connection.new()
    |> Objects.storage_objects_insert_simple(
      "ferret-rescue",
      "multipart",
      %Object{name: "ferret-images/#{ferret.id}.jpg"},
      file.path
    )
    |> case do
      {:ok, _res} ->
        ferret
        |> Ferret.changeset(%{image_uploaded: true})
        |> Repo.update()

      {:error, error} ->
        {:error, error}
    end
  end

  def upload_image(ferret, _params), do: {:ok, ferret}
end
