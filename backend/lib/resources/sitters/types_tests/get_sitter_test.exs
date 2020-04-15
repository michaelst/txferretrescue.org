defmodule FerretRescue.Resources.Sitter.Types.GetSitterTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get sitter" do
    sitter = insert(:sitter)

    doc = """
    query {
      sitter(id: "#{sitter.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "sitter" => %{
                  "id" => "#{sitter.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
