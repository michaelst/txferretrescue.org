import Config

config :ferret_rescue, FerretRescue.Endpoint,
  url: [host: "api.txferretrescue.org", port: 443],
  http: [port: 4000],
  debug_errors: false,
  server: true

config :logger,
  backends: [LoggerJSON],
  level: :info

config :ferret_rescue, FerretRescue.Repo,
  database: "ferret_rescue",
  pool_size: 5

config :cors_plug,
  origin: ["https://admin.txferretrescue.org", "https://txferretrescue.org"],
  max_age: 86400
