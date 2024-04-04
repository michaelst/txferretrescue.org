defmodule FerretRescue.Release do
  @moduledoc """
  This setups a function to run migrations in releases.
  """

  def migrate do
    for repo <- repos() do
      {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  def rollback(repo, version) do
    {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
  end

  defp repos do
    Application.load(:ferret_rescue)
    {:ok, _application} = Application.ensure_all_started(:ssl)
    Application.fetch_env!(:ferret_rescue, :ecto_repos)
  end
end
