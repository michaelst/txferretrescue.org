defmodule FerretRescue.Auth.Types.CreateUserTest do
  use FerretRescue.DataCase, async: true
  use Bamboo.Test

  import FerretRescue.Factory

  test "create user" do
    auth = insert(:auth)

    doc = """
    mutation {
      createUser(input: {
        email: "new@example.com",
      }) {
        id
        email
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
                "createUser" => %{
                  "id" => id,
                  "canManageApplications" => false,
                  "canManageFerrets" => false,
                  "canManageUsers" => false,
                  "canManageWebsite" => false,
                  "email" => "new@example.com"
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    assert_email_delivered_with(subject: "Set your password for admin.txferretrescue.org")
  end

  test "can't create user without permission" do
    auth = insert(:auth, can_manage_users: false)

    doc = """
    mutation {
      createUser(input: {
        email: "new@example.com",
      }) {
        email
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
                  path: ["createUser"]
                }
              ]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute_email_delivered_with(subject: "Set your password for admin.txferretrescue.org")
  end
end
