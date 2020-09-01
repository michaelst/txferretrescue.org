defmodule FerretRescue.Application.Factory do
  @moduledoc """
  ExMachina factory for ferret schema.
  """
  defmacro __using__(_opts) do
    quote do
      def application_factory do
        %FerretRescue.Application{
          age: 21,
          cage_info: "some info",
          city: "City",
          diseases_info: "some info",
          eat_info: "some info",
          email: "test@example.com",
          forever_home: "some info",
          fostering: true,
          heartworm_prevent: "some info",
          heartworm_treat: false,
          heartworms: true,
          home_type: "some info",
          kept_info: "some info",
          landlord_info: "some info",
          legal_to_own: true,
          move_info: "some info",
          name: "Some name",
          notes: "some info",
          num_ferrets_info: "some info",
          other_animals: "some info",
          own_home: true,
          owned_before: true,
          owned_details: "some info",
          people_at_address: "some info",
          phone_primary: "111 111 1111",
          play_info: "some info",
          proofing_info: "some info",
          smoker: false,
          state: "TX",
          street: "123 Street St",
          surrendered_details: "some info",
          surrendered: false,
          time_at_address: "some info",
          toy_info: "some info",
          vaccines_current: true,
          vet_info: "some info",
          zip_code: "75024"
        }
      end
    end
  end
end
