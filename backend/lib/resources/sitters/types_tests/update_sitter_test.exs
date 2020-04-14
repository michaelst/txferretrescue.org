defmodule FerretRescue.Resources.Sitter.Types.UpdateSitterTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update sitter" do
    sitter = insert(:sitter)

    doc = """
    mutation {
      updateSitter(id: "#{sitter.id}", input: { name: "New name" }) {
        id
        name
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateSitter" => %{
                  "id" => "#{sitter.id}",
                  "name" => "New name"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: true})
  end
end
