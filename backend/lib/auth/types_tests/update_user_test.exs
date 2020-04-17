defmodule FerretRescue.Auth.Types.UpdateUserTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update user" do
    auth = insert(:auth)
    user = insert(:auth, email: "update@example.com")

    doc = """
    mutation {
      updateUser(id: "#{user.id}", input: {
        email: "update-test@example.com"
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
                "updateUser" => %{
                  "id" => "#{user.id}",
                  "can_manage_applications" => false,
                  "can_manage_ferrets" => true,
                  "can_manage_users" => false,
                  "can_manage_website" => false,
                  "email" => "update-test@example.com"
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
        email: "update-test@example.com"
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
