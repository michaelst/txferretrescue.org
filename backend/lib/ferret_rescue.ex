defmodule FerretRescue do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application
  import Ecto.Query

  def start(_type, _args) do
    children = [
      {Goth, name: FerretRescue.Goth},
      FerretRescue.Repo,
      FerretRescue.Endpoint
    ]

    opts = [strategy: :one_for_one, name: FerretRescue.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    FerretRescue.Endpoint.config_change(changed, removed)
    :ok
  end

  def data, do: Dataloader.Ecto.new(FerretRescue.Repo, query: &query/2)

  def query(FerretRescue.Applications.Message, _params),
    do: from(FerretRescue.Applications.Message, order_by: [desc: :sent_at])

  def query(queryable, _params), do: queryable
end
