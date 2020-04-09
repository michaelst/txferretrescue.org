defmodule FerretRescue.Resources.Sitter.Resolver do
  @moduledoc """
  Resolver for sitters.
  """

  alias FerretRescue.Resources.Sitter
  alias FerretRescue.Repo

  def list(_args, _resolution) do
    {:ok, Repo.all(Sitter)}
  end
end
