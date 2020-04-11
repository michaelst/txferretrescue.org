use Mix.Config

config :ferret_rescue, FerretRescue.Repo,
  username: "postgres",
  password: nil,
  database: "ferret_rescue_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :ferret_rescue, FerretRescueWeb.Endpoint,
  http: [port: 4002],
  server: false

config :logger, level: :warn

config :ferret_rescue, stripe_session_module: Stripe.SessionMock

config :ferret_rescue, FerretRescue.Mailer, adapter: Bamboo.TestAdapter
