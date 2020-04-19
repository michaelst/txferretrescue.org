defmodule FerretRescue.Resources.Vet.Resolver do
  @moduledoc """
  Resolver for vets.
  """

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Vet

  def list(_args, _resolution) do
    {:ok, Repo.all(Vet)}
  end

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def create(%{input: params}, _resolution) do
    %Vet{}
    |> Vet.changeset(params)
    |> Repo.insert()
  end

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Vet.changeset(params)
    |> Repo.update()
  end

  def delete(_args, %{context: %{model: model}}) do
    Repo.delete(model)
  end
end
