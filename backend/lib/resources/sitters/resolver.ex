defmodule FerretRescue.Resources.Sitter.Resolver do
  @moduledoc """
  Resolver for sitters.
  """

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Sitter

  def list(_args, _resolution) do
    {:ok, Repo.all(Sitter)}
  end
end
