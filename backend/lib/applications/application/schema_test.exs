defmodule FerretRescue.Application.SchemaTest do
  use FerretRescue.DataCase, async: true

  alias FerretRescue.Application

  test "changeset validation" do
    assert %Ecto.Changeset{
             errors: [
               surrendered_details: {"can't be blank", [validation: :required]},
               owned_details: {"can't be blank", [validation: :required]},
               landlord_info: {"can't be blank", [validation: :required]},
               age: {"can't be blank", [validation: :required]},
               cage_info: {"can't be blank", [validation: :required]},
               city: {"can't be blank", [validation: :required]},
               diseases_info: {"can't be blank", [validation: :required]},
               eat_info: {"can't be blank", [validation: :required]},
               email: {"can't be blank", [validation: :required]},
               forever_home: {"can't be blank", [validation: :required]},
               fostering: {"can't be blank", [validation: :required]},
               heartworm_prevent: {"can't be blank", [validation: :required]},
               heartworm_treat: {"can't be blank", [validation: :required]},
               heartworms: {"can't be blank", [validation: :required]},
               home_type: {"can't be blank", [validation: :required]},
               kept_info: {"can't be blank", [validation: :required]},
               legal_to_own: {"can't be blank", [validation: :required]},
               move_info: {"can't be blank", [validation: :required]},
               name: {"can't be blank", [validation: :required]},
               num_ferrets_info: {"can't be blank", [validation: :required]},
               other_animals: {"can't be blank", [validation: :required]},
               people_at_address: {"can't be blank", [validation: :required]},
               phone_primary: {"can't be blank", [validation: :required]},
               play_info: {"can't be blank", [validation: :required]},
               proofing_info: {"can't be blank", [validation: :required]},
               smoker: {"can't be blank", [validation: :required]},
               state: {"can't be blank", [validation: :required]},
               street: {"can't be blank", [validation: :required]},
               time_at_address: {"can't be blank", [validation: :required]},
               toy_info: {"can't be blank", [validation: :required]},
               vaccines_current: {"can't be blank", [validation: :required]},
               vet_info: {"can't be blank", [validation: :required]},
               zip_code: {"can't be blank", [validation: :required]}
             ]
           } =
             Application.changeset(%Application{}, %{
               own_home: false,
               owned_before: true,
               surrendered: true
             })

    assert %Ecto.Changeset{
             errors: [
               age: {"can't be blank", [validation: :required]},
               cage_info: {"can't be blank", [validation: :required]},
               city: {"can't be blank", [validation: :required]},
               diseases_info: {"can't be blank", [validation: :required]},
               eat_info: {"can't be blank", [validation: :required]},
               email: {"can't be blank", [validation: :required]},
               forever_home: {"can't be blank", [validation: :required]},
               fostering: {"can't be blank", [validation: :required]},
               heartworm_prevent: {"can't be blank", [validation: :required]},
               heartworm_treat: {"can't be blank", [validation: :required]},
               heartworms: {"can't be blank", [validation: :required]},
               home_type: {"can't be blank", [validation: :required]},
               kept_info: {"can't be blank", [validation: :required]},
               legal_to_own: {"can't be blank", [validation: :required]},
               move_info: {"can't be blank", [validation: :required]},
               name: {"can't be blank", [validation: :required]},
               num_ferrets_info: {"can't be blank", [validation: :required]},
               other_animals: {"can't be blank", [validation: :required]},
               people_at_address: {"can't be blank", [validation: :required]},
               phone_primary: {"can't be blank", [validation: :required]},
               play_info: {"can't be blank", [validation: :required]},
               proofing_info: {"can't be blank", [validation: :required]},
               smoker: {"can't be blank", [validation: :required]},
               state: {"can't be blank", [validation: :required]},
               street: {"can't be blank", [validation: :required]},
               time_at_address: {"can't be blank", [validation: :required]},
               toy_info: {"can't be blank", [validation: :required]},
               vaccines_current: {"can't be blank", [validation: :required]},
               vet_info: {"can't be blank", [validation: :required]},
               zip_code: {"can't be blank", [validation: :required]}
             ]
           } =
             Application.changeset(%Application{}, %{
               own_home: true,
               owned_before: false,
               surrendered: false
             })
  end
end
