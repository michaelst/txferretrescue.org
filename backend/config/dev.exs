import Config

config :ferret_rescue, FerretRescue.Repo,
  username: System.get_env("DB_USERNAME", "postgres"),
  password: System.get_env("DB_PASSWORD", "postgres"),
  database: "ferret_rescue_dev",
  hostname: "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :ferret_rescue, FerretRescue.Endpoint,
  http: [port: 4000],
  secret_key_base: "4DFzJBdaBpWgtkrl2CPGLKjtfpJ9i1IKQJ0Hb6eto7IsLF+Ij3d3yuWboBCfw0oG",
  debug_errors: true,
  code_reloader: true,
  check_origin: false

config :logger, :console, format: "[$level] $message\n"

config :phoenix, :stacktrace_depth, 20

config :phoenix, :plug_init_mode, :runtime

config :ferret_rescue, FerretRescue.Mailer, adapter: Bamboo.LocalAdapter

config :ferret_rescue, FerretRescue.Auth.Guardian,
  secret_key: "IWJGRILoWj+0JE89DyB26wwc5eKNqNIr8u/ikkpOk1ozKwJTyCEvTJgnmlMqejqX"

config :cors_plug,
  origin: ["http://localhost:3000", "http://localhost:3001"],
  max_age: 86400
