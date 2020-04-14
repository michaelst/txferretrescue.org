defmodule FerretRescue.Resources.Sitter.Types.CreateSitterTest do
  use FerretRescue.DataCase, async: true

  test "create sitter" do
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
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: true})
  end
end
