defmodule FerretRescue.Repo do
  use Ecto.Repo,
    otp_app: :ferret_rescue,
    adapter: Ecto.Adapters.Postgres
end
