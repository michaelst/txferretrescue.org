defmodule FerretRescue.Resources.Vet.Types.DeleteVetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Vet

  test "delete vet" do
    auth = insert(:auth)
    vet = insert(:vet)

    doc = """
    mutation {
      deleteVet(id: "#{vet.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "deleteVet" => %{
                  "id" => "#{vet.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute Repo.get(Vet, vet.id)
  end
end
