defmodule FerretRescue.Ferret.Resolver do
  @moduledoc """
  Resolver for ferrets.
  """
  import Ecto.Query

  alias FerretRescue.Ferret
  alias FerretRescue.Ferret.Utils
  alias FerretRescue.Repo

  def list(%{all: true}, _resolution) do
    {:ok, Repo.all(Ferret)}
  end

  def list(%{foster: true}, _resolution) do
    ferrets = from(Ferret, where: [foster: true, available: true]) |> Repo.all()

    {:ok, ferrets}
  end

  def list(_args, _resolution) do
    ferrets = from(Ferret, where: [foster: false, available: true]) |> Repo.all()

    {:ok, ferrets}
  end

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def create(%{input: params}, _resolution) do
    %Ferret{}
    |> Ferret.changeset(params)
    |> Repo.insert()
    |> case do
      {:ok, ferret} ->
        case Utils.upload_image(ferret, params) do
          {:ok, updated_ferret} -> {:ok, updated_ferret}
          # if something failed we will just ignore the image upload
          _error -> {:ok, ferret}
        end

      error ->
        error
    end
  end

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Ferret.changeset(params)
    |> Repo.update()
    |> case do
      {:ok, ferret} ->
        case Utils.upload_image(ferret, params) do
          {:ok, updated_ferret} -> {:ok, updated_ferret}
          # if something failed we will just ignore the image upload
          _error -> {:ok, ferret}
        end

      error ->
        error
    end
  end

  def delete(_args, %{context: %{model: model}}) do
    Repo.delete(model)
  end
end
