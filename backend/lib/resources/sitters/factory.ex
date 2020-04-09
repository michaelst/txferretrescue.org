defmodule FerretRescue.Resources.Sitter.Factory do
  @moduledoc """
  ExMachina factory for ferret schema.
  """
  defmacro __using__(_opts) do
    quote do
      def sitter_factory do
        %FerretRescue.Resources.Sitter{
          name: "My Sitter"
        }
      end
    end
  end
end
