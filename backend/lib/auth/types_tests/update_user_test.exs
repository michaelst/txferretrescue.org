defmodule FerretRescue.Auth.Types.UpdateUserTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update user" do
    auth = insert(:auth)
    user = insert(:auth, email: "update@example.com")

    doc = """
    mutation {
      updateUser(id: "#{user.id}", input: {
        canManageFerrets: false
      }) {
        id
        canManageApplications
        canManageUsers
        canManageFerrets
        canManageWebsite
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateUser" => %{
                  "id" => "#{user.id}",
                  "canManageApplications" => true,
                  "canManageFerrets" => false,
                  "canManageUsers" => true,
                  "canManageWebsite" => true
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "can't update user without permission" do
    auth = insert(:auth, can_manage_users: false)
    user = insert(:auth, email: "update@example.com")

    doc = """
    mutation {
      updateUser(id: "#{user.id}", input: {
        canManageApplications: false
        canManageUsers: false
        canManageFerrets: true
        canManageWebsite: false
      }) {
        id
        canManageApplications
        canManageUsers
        canManageFerrets
        canManageWebsite
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
                  path: ["updateUser"]
                }
              ]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
