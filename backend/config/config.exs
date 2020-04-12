use Mix.Config

config :ferret_rescue,
  env: Mix.env(),
  ecto_repos: [FerretRescue.Repo],
  application_email: "txflrapplications@gmail.com"

config :ferret_rescue, FerretRescueWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: FerretRescueWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: FerretRescue.PubSub, adapter: Phoenix.PubSub.PG2]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

config :ferret_rescue, FerretRescue.Mailer, adapter: Bamboo.SendGridAdapter

config :ferret_rescue, FerretRescue.Auth.Guardian, issuer: "https://api.txferretrescue.org"

import_config "#{Mix.env()}.exs"
