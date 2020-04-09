defmodule FerretRescue.Resources.Vet.Types.VetsTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list vets" do
    vet = insert(:vet)

    doc = """
    query {
      vets {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "vets" => [
                  %{
                    "id" => "#{vet.id}"
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
