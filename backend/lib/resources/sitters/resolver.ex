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

  def create(args, _resolution) do
    sitters = from(Sitter, order_by: :name) |> Repo.all()

    {:ok, sitters}
  end
end
