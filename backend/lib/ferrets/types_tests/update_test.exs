defmodule FerretRescue.Ferret.Types.UpdateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update ferret" do
    auth = insert(:auth)
    ferret = insert(:ferret)

    doc = """
    mutation {
      updateFerret(id: "#{ferret.id}", input: { name: "Lois" }) {
        id
        name
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateFerret" => %{
                  "id" => "#{ferret.id}",
                  "name" => "Lois"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
