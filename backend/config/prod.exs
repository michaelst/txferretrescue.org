use Mix.Config

config :ferret_rescue,
  login_verification: System.get_env("LOGIN_VERIFICATION")

config :ferret_rescue, FerretRescueWeb.Endpoint, url: [host: "new.txferretrescue.org", port: 443]

config :logger, level: :info

config :stripity_stripe, api_key: System.get_env("STRIPE_SECRET")

config :ferret_rescue, FerretRescue.Mailer, api_key: System.get_env("SENDGRID_API_KEY")

config :ferret_rescue, FerretRescue.Auth.Guardian, secret_key: System.get_env("GUARDIAN_SECRET")
