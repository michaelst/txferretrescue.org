defmodule FerretRescueWeb.Router do
  use FerretRescueWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FerretRescue do
    pipe_through :api
  end
end
