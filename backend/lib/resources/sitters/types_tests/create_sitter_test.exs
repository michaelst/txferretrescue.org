defmodule FerretRescue.Resources.Sitter.Types.CreateSitterTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "create sitter" do
    auth = insert(:auth)

    doc = """
    mutation {
      createSitter(input: { name: "New sitter" }) {
        name
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createSitter" => %{
                  "name" => "New sitter"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
