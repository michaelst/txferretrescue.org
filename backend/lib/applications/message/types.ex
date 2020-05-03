defmodule FerretRescue.Applications.Message.Types do
  @moduledoc """
  Defines absinthe types for message schema.
  """
  use Absinthe.Schema.Notation

  object :message do
    field :id, non_null(:id)
    field :message, non_null(:string)
    field :sent_at, non_null(:string)
  end
end
