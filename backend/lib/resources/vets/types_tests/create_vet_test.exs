defmodule FerretRescue.Resources.Sitter.Types.CreateVetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "create vet" do
    auth = insert(:auth)

    doc = """
    mutation {
      createVet(input: { companyName: "New vet" }) {
        companyName
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createVet" => %{
                  "companyName" => "New vet"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
