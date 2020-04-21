defmodule FerretRescue.FAQ.Content.Resolver do
  @moduledoc """
  Resolver for FAQ Content.
  """

  alias FerretRescue.FAQ.Content
  alias FerretRescue.Repo

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

  def create(%{input: params}, _resolution) do
    %Content{}
    |> Content.changeset(params)
    |> Repo.insert()
  end

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Content.changeset(params)
    |> Repo.update()
  end

  def delete(_args, %{context: %{model: model}}) do
    Repo.delete(model)
  end
end
