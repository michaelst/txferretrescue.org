defmodule FerretRescue.Resources.Vet.Types.UpdateVetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update vet" do
    auth = insert(:auth)
    vet = insert(:vet)

    doc = """
    mutation {
      updateVet(id: "#{vet.id}", input: { companyName: "New name" }) {
        id
        companyName
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateVet" => %{
                  "id" => "#{vet.id}",
                  "companyName" => "New name"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
