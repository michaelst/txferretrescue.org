defmodule FerretRescue.Ferret.Factory do
  @moduledoc """
  ExMachina factory for ferret schema.
  """
  defmacro __using__(_opts) do
    quote do
      def ferret_factory do
        %FerretRescue.Ferret{
          age_months: 1,
          age_years: 6,
          available: true,
          fee: 125,
          foster: false,
          gender: :male,
          name: "My Ferret"
        }
      end
    end
  end
end
