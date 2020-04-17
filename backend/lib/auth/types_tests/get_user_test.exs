defmodule FerretRescue.Auth.Types.GetUserTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get user" do
    auth = insert(:auth)

    doc = """
    query {
      user(id: "#{auth.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "user" => %{
                  "id" => "#{auth.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "can't get user without permission" do
    auth = insert(:auth, can_manage_users: false)

    doc = """
    query {
      user(id: "#{auth.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "unauthenticated",
                  path: ["user"]
                }
              ]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
