defmodule FerretRescue.Resources.Vet.Factory do
  @moduledoc """
  ExMachina factory for vet schema.
  """
  defmacro __using__(_opts) do
    quote do
      def vet_factory do
        %FerretRescue.Resources.Vet{
          company_name: "Some Vet"
        }
      end
    end
  end
end
