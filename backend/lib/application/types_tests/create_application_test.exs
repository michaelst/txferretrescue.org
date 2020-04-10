defmodule FerretRescue.Application.Types.CreateApplicationTest do
  use FerretRescue.DataCase, async: true
  use Bamboo.Test

  alias FerretRescue.Application
  alias FerretRescue.Email
  alias FerretRescue.Repo

  test "create application" do
    doc = """
    mutation {
      createApplication(
        age: 21
        cage_info: "Some info"
        city: "Frisco"
        diseases_info: "Some info"
        eat_info: "Some info"
        email: "test@example.com"
        forever_home: "Some info"
        fostering: true
        heartworm_prevent: "Some info"
        heartworm_treat: false
        heartworms: true
        home_type: "Some info"
        kept_info: "Some info"
        landlord_info: "Some info"
        legal_to_own: true
        move_info: "Some info"
        name: "John Smith"
        notes: "Some notes"
        num_ferrets_info: "Some info"
        other_animals: "Some notes"
        own_home: false
        owned_before: false
        owned_details: "Some notes"
        people_at_address: "Some notes"
        phone_primary: "1111111111"
        phone_secondary: "1111111111"
        play_info: "Some info"
        proofing_info: "Some info"
        smoker: false
        state: "Texas"
        street: "555 Some Ln"
        surrendered_details: "Some info"
        surrendered: false
        time_at_address: "1 year"
        toy_info: "Some info"
        vaccines_current: true
        vet_info: "Some info"
        zip_code: 75035
      ) {
        id
        age
        cage_info
        city
        diseases_info
        eat_info
        email
        forever_home
        fostering
        heartworm_prevent
        heartworm_treat
        heartworms
        home_type
        kept_info
        landlord_info
        legal_to_own
        move_info
        name
        notes
        num_ferrets_info
        other_animals
        own_home
        owned_before
        owned_details
        people_at_address
        phone_primary
        phone_secondary
        play_info
        proofing_info
        smoker
        state
        street
        surrendered_details
        surrendered
        time_at_address
        toy_info
        vaccines_current
        vet_info
        zip_code
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createApplication" => %{
                  "id" => id,
                  "move_info" => "Some info",
                  "time_at_address" => "1 year",
                  "own_home" => false,
                  "notes" => "Some notes",
                  "legal_to_own" => true,
                  "forever_home" => "Some info",
                  "owned_before" => false,
                  "home_type" => "Some info",
                  "street" => "555 Some Ln",
                  "landlord_info" => "Some info",
                  "toy_info" => "Some info",
                  "diseases_info" => "Some info",
                  "proofing_info" => "Some info",
                  "other_animals" => "Some notes",
                  "heartworm_treat" => false,
                  "play_info" => "Some info",
                  "phone_secondary" => "1111111111",
                  "cage_info" => "Some info",
                  "heartworms" => true,
                  "age" => 21,
                  "zip_code" => 75035,
                  "num_ferrets_info" => "Some info",
                  "kept_info" => "Some info",
                  "people_at_address" => "Some notes",
                  "state" => "Texas",
                  "name" => "John Smith",
                  "surrendered_details" => "Some info",
                  "city" => "Frisco",
                  "fostering" => true,
                  "eat_info" => "Some info",
                  "email" => "test@example.com",
                  "vaccines_current" => true,
                  "phone_primary" => "1111111111",
                  "owned_details" => "Some notes",
                  "vet_info" => "Some info",
                  "smoker" => false,
                  "heartworm_prevent" => "Some info",
                  "surrendered" => false
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema)

    expected_email = Repo.get(Application, id) |> Email.new_application()
    assert_delivered_email expected_email
  end
end
