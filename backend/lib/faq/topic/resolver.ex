defmodule FerretRescue.FAQ.Topic.Resolver do
  @moduledoc """
  Resolver for FAQ Topics.
  """
  import Ecto.Query

  alias FerretRescue.FAQ.Topic
  alias FerretRescue.Repo

  def list(_args, _resolution) do
    topics = from(Topic, order_by: :rank) |> Repo.all()

    {:ok, topics}
  end
end
