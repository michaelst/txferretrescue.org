defmodule FerretRescue.Utils.Resolver do
  @moduledoc """
  Useful functions to use on resolvers.
  """

  @doc """
  Handles `sort/4` and `filter/4` for a resolver.
  """
  def apply_params(query, resolution, params, resolver) do
    query
    |> sort(resolution, params, resolver)
    |> filter(resolution, params, resolver)
  end

  @doc """
  Uses params to sort a query. Calls sort on the passed in resolver.
  """
  def sort(query, resolution, %{sort: fields}, resolver) do
    fields
    |> Enum.reduce(query, fn %{direction: direction, field: field}, acc ->
      resolver.sort(resolution, acc, field, direction)
    end)
  end

  def sort(query, _resolution, _params, _resolver), do: query

  @doc """
  Uses params to filter a query. Calls filter on the passed in resolver.
  """
  def filter(query, resolution, %{filter: filters}, resolver) do
    filters
    |> Enum.reduce(query, fn {k, v}, acc ->
      resolver.filter(resolution, acc, k, v)
    end)
  end

  def filter(query, _resolution, _params, _resolver), do: query
end
