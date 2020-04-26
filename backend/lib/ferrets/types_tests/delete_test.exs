defmodule FerretRescue.Ferret.Types.DeleteTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Ferret
  alias FerretRescue.Repo

  test "delete ferret" do
    auth = insert(:auth)
    ferret = insert(:ferret)

    doc = """
    mutation {
      deleteFerret(id: "#{ferret.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "deleteFerret" => %{
                  "id" => "#{ferret.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute Repo.get(Ferret, ferret.id)
  end
end
