use Mix.Config

config :ferret_rescue, FerretRescue.Repo,
  username: "postgres",
  password: System.get_env("TEST_DB_PASSWORD", "postgres"),
  database: "ferret_rescue_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 25

config :ferret_rescue, FerretRescue.Endpoint,
  http: [port: 4002],
  server: false

config :logger, level: :warn

config :ferret_rescue, stripe_session_module: Stripe.SessionMock

config :ferret_rescue, FerretRescue.Mailer, adapter: Bamboo.TestAdapter

config :ferret_rescue, FerretRescue.Auth.Guardian,
  secret_key: "IWJGRILoWj+0JE89DyB26wwc5eKNqNIr8u/ikkpOk1ozKwJTyCEvTJgnmlMqejqX"
