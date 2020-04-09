defmodule FerretRescue do
  @moduledoc """
  FerretRescue keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """
  import Ecto.Query

  def data, do: Dataloader.Ecto.new(FerretRescue.Repo, query: &query/2)

  def query(FerretRescue.FAQ.Topic, _params), do: from(FerretRescue.FAQ.Topic, order_by: :rank)
  def query(FerretRescue.FAQ.Content, _params), do: from(FerretRescue.FAQ.Content, order_by: :rank)
  def query(queryable, _params), do: queryable
end
