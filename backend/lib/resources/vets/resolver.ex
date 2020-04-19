defmodule FerretRescue.Resources.Vet.Resolver do
  @moduledoc """
  Resolver for vets.
  """
  import Ecto.Query

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Vet

  def list(_args, _resolution) do
    vets = from(Vet, order_by: :company_name) |> Repo.all()

    {:ok, vets}
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
