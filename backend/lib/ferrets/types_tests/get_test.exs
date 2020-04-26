defmodule FerretRescue.Ferret.Types.GetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get ferret" do
    ferret = insert(:ferret)

    doc = """
    query {
      ferret(id: "#{ferret.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "ferret" => %{
                  "id" => "#{ferret.id}",
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
