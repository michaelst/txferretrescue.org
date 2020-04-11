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
        cageInfo: "Some info"
        city: "Frisco"
        diseasesInfo: "Some info"
        eatInfo: "Some info"
        email: "test@example.com"
        foreverHome: "Some info"
        fostering: true
        heartwormPrevent: "Some info"
        heartworms: true
        heartwormTreat: false
        homeType: "Some info"
        keptInfo: "Some info"
        landlordInfo: "Some info"
        legalToOwn: true
        moveInfo: "Some info"
        name: "John Smith"
        notes: "Some notes"
        numFerretsInfo: "Some info"
        otherAnimals: "Some notes"
        ownedBefore: false
        ownedDetails: "Some notes"
        ownHome: false
        peopleAtAddress: "Some notes"
        phonePrimary: "1111111111"
        phoneSecondary: "1111111111"
        playInfo: "Some info"
        proofingInfo: "Some info"
        smoker: false
        state: "Texas"
        street: "555 Some Ln"
        surrendered: false
        surrenderedDetails: "Some info"
        timeAtAddress: "1 year"
        toyInfo: "Some info"
        vaccinesCurrent: true
        vetInfo: "Some info"
        zipCode: 75035
      ) {
        id
        age
        cageInfo
        city
        diseasesInfo
        eatInfo
        email
        foreverHome
        fostering
        heartwormPrevent
        heartworms
        heartwormTreat
        homeType
        keptInfo
        landlordInfo
        legalToOwn
        moveInfo
        name
        notes
        numFerretsInfo
        otherAnimals
        ownedBefore
        ownedDetails
        ownHome
        peopleAtAddress
        phonePrimary
        phoneSecondary
        playInfo
        proofingInfo
        smoker
        state
        street
        surrendered
        surrenderedDetails
        timeAtAddress
        toyInfo
        vaccinesCurrent
        vetInfo
        zipCode
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createApplication" => %{
                  "id" => id,
                  "age" => 21,
                  "cageInfo" => "Some info",
                  "city" => "Frisco",
                  "diseasesInfo" => "Some info",
                  "eatInfo" => "Some info",
                  "email" => "test@example.com",
                  "foreverHome" => "Some info",
                  "fostering" => true,
                  "heartwormPrevent" => "Some info",
                  "heartworms" => true,
                  "heartwormTreat" => false,
                  "homeType" => "Some info",
                  "keptInfo" => "Some info",
                  "landlordInfo" => "Some info",
                  "legalToOwn" => true,
                  "moveInfo" => "Some info",
                  "name" => "John Smith",
                  "notes" => "Some notes",
                  "numFerretsInfo" => "Some info",
                  "otherAnimals" => "Some notes",
                  "ownedBefore" => false,
                  "ownedDetails" => "Some notes",
                  "ownHome" => false,
                  "peopleAtAddress" => "Some notes",
                  "phonePrimary" => "1111111111",
                  "phoneSecondary" => "1111111111",
                  "playInfo" => "Some info",
                  "proofingInfo" => "Some info",
                  "smoker" => false,
                  "state" => "Texas",
                  "street" => "555 Some Ln",
                  "surrendered" => false
                  "surrenderedDetails" => "Some info",
                  "timeAtAddress" => "1 year",
                  "toyInfo" => "Some info",
                  "vaccinesCurrent" => true,
                  "vetInfo" => "Some info",
                  "zipCode" => 75035,
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema)

    expected_email = Repo.get(Application, id) |> Email.new_application()
    assert_delivered_email expected_email
  end
end
