defmodule FerretRescue.Middleware.LoadModel do
  @moduledoc """
  Middleware to load model by id and add it to absinthe context.
  """
  @behaviour Absinthe.Middleware

  alias Absinthe.Resolution
  alias FerretRescue.Repo

  def call(%{arguments: %{id: id}} = resolution, opts) do
    case Repo.get(opts[:module], id) do
      nil -> resolution |> Resolution.put_result({:error, "not found"})
      model -> %{resolution | context: Map.put(resolution.context, :model, model)}
    end
  end
end
