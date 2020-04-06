defmodule FerretRescue.Ferret.Resolver do
  @moduledoc """
  Resolver for ferrets.
  """
  import Ecto.Query

  alias FerretRescue.Ferret
  alias FerretRescue.Repo

  def list(%{foster: true}, _resolution) do
    ferrets = from(Ferret, where: [foster: true, available: true]) |> Repo.all()

    {:ok, ferrets}
  end

  def list(_args, _resolution) do
    ferrets = from(Ferret, where: [foster: false, available: true]) |> Repo.all()

    {:ok, ferrets}
  end
end
