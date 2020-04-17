defmodule FerretRescue.Auth.Types.UsersTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list users" do
    auth = insert(:auth)

    doc = """
    query {
      users {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "users" => [
                  %{
                    "id" => "#{auth.id}"
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "can't list users without permission" do
    auth = insert(:auth, can_manage_users: false)

    doc = """
    query {
      users {
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
                  path: ["users"]
                }
              ]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
