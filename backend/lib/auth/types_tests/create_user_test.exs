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
        can_manage_applications: false,
        can_manage_users: false,
        can_manage_ferrets: true,
        can_manage_website: false
      }) {
        id
        email
        can_manage_applications
        can_manage_users
        can_manage_ferrets
        can_manage_website
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createUser" => %{
                  "id" => id,
                  "can_manage_applications" => false,
                  "can_manage_ferrets" => true,
                  "can_manage_users" => false,
                  "can_manage_website" => false,
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
        can_manage_applications: false,
        can_manage_users: false,
        can_manage_ferrets: true,
        can_manage_website: false
      }) {
        email
        can_manage_applications
        can_manage_users
        can_manage_ferrets
        can_manage_website
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
