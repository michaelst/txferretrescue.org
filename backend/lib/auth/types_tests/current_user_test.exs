defmodule FerretRescue.Auth.Types.CurrentUserTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get current user" do
    auth = insert(:auth)

    doc = """
    query {
      currentUser {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "currentUser" => %{
                  "id" => "#{auth.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
