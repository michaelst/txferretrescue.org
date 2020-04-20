use Mix.Config

config :ferret_rescue, FerretRescueWeb.Endpoint,
  url: [host: "api.txferretrescue.org", port: 443],
  http: [port: 80],
  secret_key_base: System.fetch_env!("SECRET_KEY_BASE"),
  debug_errors: false,
  server: true

config :logger, level: :info

config :ferret_rescue, FerretRescue.Repo,
  hostname: "10.122.112.3",
  database: "ferret_rescue",
  username: "postgres",
  password: System.fetch_env!("DB_PASSWORD"),
  pool_size: 5

config :ferret_rescue, FerretRescue.Mailer, api_key: System.fetch_env!("SENDGRID_API_KEY")

config :ferret_rescue, FerretRescue.Auth.Guardian, secret_key: System.fetch_env!("GUARDIAN_SECRET")

config :stripity_stripe, api_key: System.fetch_env!("STRIPE_SECRET")
