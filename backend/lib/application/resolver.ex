defmodule FerretRescue.Application.Resolver do
  @moduledoc """
  Resolver for applications.
  """

  alias FerretRescue.Application
  alias FerretRescue.Email
  alias FerretRescue.Mailer
  alias FerretRescue.Repo

  def create(args, _resolution) do
    %Application{}
    |> Application.changeset(args)
    |> Repo.insert()
    |> case do
      {:ok, application} ->
        application
        |> Email.new_application()
        |> Mailer.deliver_now()

        {:ok, application}

      error ->
        error
    end
  end
end
