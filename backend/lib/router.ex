defmodule FerretRescue.Router do
  use Phoenix.Router
  use Plug.ErrorHandler
  use Sentry.Plug

  pipeline :api do
    plug :accepts, [:urlencoded, :multipart, :json]
    plug FerretRescue.Plug.Auth
  end

  forward "/_health", FerretRescue.HealthCheck

  if Application.get_env(:ferret_rescue, :env) == :dev do
    forward "/sent_emails", Bamboo.SentEmailViewerPlug
  end

  scope "/" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug,
      schema: FerretRescue.Schema,
      analyze_complexity: true,
      max_complexity: 250
  end
end
