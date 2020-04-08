import Config

config :stripity_stripe, api_key: System.fetch_env!("STRIPE_SECRET")
