defmodule FerretRescue.Auth.Types.SendPasswordResetTest do
  use FerretRescue.DataCase, async: true
  use Bamboo.Test

  import FerretRescue.Factory

  test "send password reset" do
    auth = insert(:auth)

    doc = """
    mutation {
      sendPasswordReset(id: "#{auth.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "sendPasswordReset" => %{
                  "id" => "#{auth.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    assert_email_delivered_with(subject: "Set your password for admin.txferretrescue.org")
  end

  test "can't send password reset without permission" do
    auth = insert(:auth, can_manage_users: false)

    doc = """
    mutation {
      sendPasswordReset(id: "#{auth.id}") {
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
                  path: ["sendPasswordReset"]
                }
              ]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute_email_delivered_with(subject: "Set your password for admin.txferretrescue.org")
  end
end
