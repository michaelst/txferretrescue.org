defmodule FerretRescue.Resources.Sitter.Resolver do
  @moduledoc """
  Resolver for sitters.
  """

  import Ecto.Query

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Sitter

  def list(_args, _resolution) do
    sitters = from(Sitter, order_by: :name) |> Repo.all()

    {:ok, sitters}
  end

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def create(%{input: params}, _resolution) do
    %Sitter{}
    |> Sitter.changeset(params)
    |> Repo.insert()
  end

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Sitter.changeset(params)
    |> Repo.update()
  end

  def delete(_args, %{context: %{model: model}}) do
    Repo.delete(model)
  end
end
