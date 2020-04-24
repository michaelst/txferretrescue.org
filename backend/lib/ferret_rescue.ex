defmodule FerretRescue do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      FerretRescue.Repo,
      FerretRescueWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: FerretRescue.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    FerretRescueWeb.Endpoint.config_change(changed, removed)
    :ok
  end

  def data, do: Dataloader.Ecto.new(FerretRescue.Repo, query: &query/2)

  def query(queryable, _params), do: queryable
end
