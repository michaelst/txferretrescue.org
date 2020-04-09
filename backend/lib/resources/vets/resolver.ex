defmodule FerretRescue.Resources.Vet.Resolver do
  @moduledoc """
  Resolver for vets.
  """

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Vet

  def list(_args, _resolution) do
    {:ok, Repo.all(Vet)}
  end
end
