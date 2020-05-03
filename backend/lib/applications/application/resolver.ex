defmodule FerretRescue.Application.Resolver do
  @moduledoc """
  Resolver for applications.
  """
  import Ecto.Query

  alias FerretRescue.Application
  alias FerretRescue.Applications.Message
  alias FerretRescue.Email
  alias FerretRescue.Mailer
  alias FerretRescue.Repo
  alias FerretRescue.Utils.Resolver, as: ResolverUtils

  def list(args, resolution) do
    offset = (args.page - 1) * 50

    applications =
      from(Application,
        order_by: [desc: :inserted_at],
        limit: 50,
        offset: ^offset
      )
      |> ResolverUtils.apply_params(resolution, args, __MODULE__)
      |> Repo.all()

    {:ok, applications}
  end

  def filter(_resolution, query, :status, :needs_review), do: where(query, [a], not a.final)
  def filter(_resolution, query, :status, :all), do: query

  def filter(_resolution, query, :search, value) when byte_size(value) > 0 do
    where(query, [a], ilike(a.name, ^"%#{value}%") or ilike(a.email, ^"%#{value}%"))
  end

  def filter(_resolution, query, :search, _value), do: query

  def get(_args, %{context: %{model: model}}), do: {:ok, model}

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

  def update(%{input: params}, %{context: %{model: model}}) do
    model
    |> Application.changeset(params)
    |> Repo.update()
  end

  def decline(_args, %{context: %{model: model}}) do
    model
    |> Application.changeset(%{
      approved: false,
      reviewed: true,
      final: true
    })
    |> Repo.update()
  end

  def send_message(args, %{context: %{model: model}}) do
    %Message{}
    |> Message.changeset(args)
    |> Ecto.Changeset.put_assoc(:application, model)
    |> Repo.insert()
    |> case do
      {:ok, message} ->
        message
        |> Email.send_message(model.email)
        |> Mailer.deliver_now()

        {:ok, model}

      error ->
        error
    end
  end
end
