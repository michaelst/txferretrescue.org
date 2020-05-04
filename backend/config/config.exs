use Mix.Config

config :ferret_rescue,
  env: Mix.env(),
  ecto_repos: [FerretRescue.Repo]

config :ferret_rescue, FerretRescue.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: FerretRescue.ErrorView, accepts: ~w(html json)]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

config :ferret_rescue, FerretRescue.Mailer, adapter: Bamboo.SendGridAdapter

config :ferret_rescue, FerretRescue.Auth.Guardian, issuer: "https://api.txferretrescue.org"

config :goth, project_id: "cloud-57"

import_config "#{Mix.env()}.exs"
