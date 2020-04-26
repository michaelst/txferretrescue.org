defmodule FerretRescue.Ferret.Types.CreateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "create ferret" do
    auth = insert(:auth)

    doc = """
    mutation {
      createFerret(input: {name: "Lois", ageYears: 1, ageMonths: 1, fee: "125", bio: "", gender: FEMALE, available: true, foster: false}) {
        ageMonths
        ageYears
        available
        bio
        fee
        foster
        gender
        name
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createFerret" => %{
                  "ageMonths" => 1,
                  "ageYears" => 1,
                  "available" => true,
                  "bio" => nil,
                  "fee" => "125",
                  "foster" => false,
                  "gender" => "FEMALE",
                  "name" => "Lois"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
