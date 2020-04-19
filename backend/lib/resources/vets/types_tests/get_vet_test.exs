defmodule FerretRescue.Resources.Vet.Types.GetVetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get vet" do
    vet = insert(:vet)

    doc = """
    query {
      vet(id: "#{vet.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "vet" => %{
                  "id" => "#{vet.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
