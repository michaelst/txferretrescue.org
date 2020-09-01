import Config

config :ferret_rescue, FerretRescue.Endpoint, secret_key_base: File.read!("/etc/secrets/SECRET_KEY_BASE")

config :ferret_rescue, FerretRescue.Repo,
  hostname: System.fetch_env!("DB_HOSTNAME"),
  username: System.fetch_env!("DB_USERNAME"),
  password: File.read!("/etc/secrets/DB_PASSWORD")

config :ferret_rescue, FerretRescue.Mailer, api_key: File.read!("/etc/secrets/SENDGRID_API_KEY")

config :ferret_rescue, FerretRescue.Auth.Guardian, secret_key: File.read!("/etc/secrets/GUARDIAN_SECRET")

config :stripity_stripe, api_key: File.read!("/etc/secrets/STRIPE_SECRET")

config :sentry, dsn: File.read!("/etc/secrets/SENTRY_DSN")
