defmodule FerretRescue.Resources.Sitter.Types.SittersTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list sitters" do
    sitter = insert(:sitter)

    doc = """
    query {
      sitters {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "sitters" => [
                  %{
                    "id" => "#{sitter.id}"
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
