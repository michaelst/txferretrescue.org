defmodule FerretRescue.Resources.Sitter.Types.DeleteSitterTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Repo
  alias FerretRescue.Resources.Sitter

  test "delete sitter" do
    sitter = insert(:sitter)

    doc = """
    mutation {
      deleteSitter(id: "#{sitter.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "deleteSitter" => %{
                  "id" => "#{sitter.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: true})

    refute Repo.get(Sitter, sitter.id)
  end
end
