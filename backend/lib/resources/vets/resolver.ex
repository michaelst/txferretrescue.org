defmodule FerretRescue.Resources.Vet.Resolver do
  @moduledoc """
  Resolver for vets.
  """

  alias FerretRescue.Resources.Vet
  alias FerretRescue.Repo

  def list(_args, _resolution) do
    {:ok, Repo.all(Vet)}
  end
end
