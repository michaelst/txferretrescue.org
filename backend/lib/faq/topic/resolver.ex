defmodule FerretRescue.FAQ.Topic.Resolver do
  @moduledoc """
  Resolver for FAQ Topics.
  """
  import Ecto.Query

  alias FerretRescue.FAQ.Topic
  alias FerretRescue.Repo

  def list(_args, _resolution) do
    topics = from(Topic, order_by: :rank) |> Repo.all()

    {:ok, topics}
  end

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def create(%{input: params}, _resolution) do
    %Topic{}
    |> Topic.changeset(params)
    |> Repo.insert()
  end

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Topic.changeset(params)
    |> Repo.update()
  end

  def delete(_args, %{context: %{model: model}}) do
    Repo.delete(model)
  end
end
