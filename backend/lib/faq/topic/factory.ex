defmodule FerretRescue.FAQ.Topic.Factory do
  @moduledoc """
  ExMachina factory for faq_topic schema.
  """
  defmacro __using__(_opts) do
    quote do
      def faq_topic_factory do
        %FerretRescue.FAQ.Topic{
          name: "Section",
          rank: 1
        }
      end
    end
  end
end
