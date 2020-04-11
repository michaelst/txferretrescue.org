import Config

config :stripity_stripe, api_key: System.fetch_env!("STRIPE_SECRET")

config :ferret_rescue, FerretRescue.Mailer, System.fetch_env!("SENDGRID_API_KEY")
