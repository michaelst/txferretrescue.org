defmodule FerretRescue.Auth.Types.DeleteUserTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Auth
  alias FerretRescue.Repo

  test "delete user" do
    auth = insert(:auth)
    user = insert(:auth, email: "user@example.com")

    doc = """
    mutation {
      deleteUser(id: "#{user.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "deleteUser" => %{
                  "id" => "#{user.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute Repo.get(Auth, user.id)
    assert Repo.get!(Auth, auth.id)
  end

  test "can't delete user without permission" do
    auth = insert(:auth, can_manage_users: false)
    user = insert(:auth, email: "user@example.com")

    doc = """
    mutation {
      deleteUser(id: "#{user.id}") {
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
                  path: ["deleteUser"]
                }
              ]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    assert Repo.get!(Auth, user.id)
    assert Repo.get!(Auth, auth.id)
  end
end
