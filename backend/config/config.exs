# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :ferret_rescue,
  ecto_repos: [FerretRescue.Repo]

# Configures the endpoint
config :ferret_rescue, FerretRescueWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "4DFzJBdaBpWgtkrl2CPGLKjtfpJ9i1IKQJ0Hb6eto7IsLF+Ij3d3yuWboBCfw0oG",
  render_errors: [view: FerretRescueWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: FerretRescue.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "ipBpJ/R7"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
