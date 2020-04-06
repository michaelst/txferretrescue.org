use Mix.Config

config :ferret_rescue,
  ecto_repos: [FerretRescue.Repo]

# Configures the endpoint
config :ferret_rescue, FerretRescueWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "4DFzJBdaBpWgtkrl2CPGLKjtfpJ9i1IKQJ0Hb6eto7IsLF+Ij3d3yuWboBCfw0oG",
  render_errors: [view: FerretRescueWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: FerretRescue.PubSub, adapter: Phoenix.PubSub.PG2]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

import_config "#{Mix.env()}.exs"
