defmodule FerretRescue.FAQ.Content.Factory do
  @moduledoc """
  ExMachina factory for faq_content schema.
  """
  defmacro __using__(_opts) do
    quote do
      def faq_content_factory do
        %FerretRescue.FAQ.Content{
          title: "Some question",
          content: "Some answer",
          rank: 1
        }
      end
    end
  end
end
