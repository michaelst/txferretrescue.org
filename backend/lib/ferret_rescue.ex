defmodule FerretRescue do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  import Ecto.Query

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

  def query(FerretRescue.FAQ.Topic, _params), do: from(FerretRescue.FAQ.Topic, order_by: :rank)
  def query(FerretRescue.FAQ.Content, _params), do: from(FerretRescue.FAQ.Content, order_by: :rank)
  def query(queryable, _params), do: queryable
end
