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

config :logger_json, :backend, metadata: :all

config :phoenix, :json_library, Jason

config :ferret_rescue, FerretRescue.Mailer, adapter: Bamboo.SendGridAdapter

config :ferret_rescue, FerretRescue.Auth.Guardian, issuer: "https://api.txferretrescue.org"

config :goth, project_id: "cloud-57"

config :sentry,
  dsn: System.get_env("SENTRY_DSN"),
  environment_name: Mix.env(),
  enable_source_code_context: true,
  root_source_code_path: File.cwd!(),
  tags: %{
    env: Mix.env()
  },
  included_environments: [:prod]

import_config "#{Mix.env()}.exs"
