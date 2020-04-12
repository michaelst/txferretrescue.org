defmodule FerretRescueWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :ferret_rescue

  if Application.get_env(:ferret_rescue, :env) == :prod do
    plug CORSPlug, orgin: ["https://admin.txferretrescue.org", "https://new.txferretrescue.org"]
  else
    plug CORSPlug, orgin: ["http://localhost:3000"]
  end

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Plug.RequestId
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()

  plug Plug.MethodOverride
  plug Plug.Head
  plug FerretRescueWeb.Router
end
