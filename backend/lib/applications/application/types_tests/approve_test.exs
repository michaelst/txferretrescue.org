defmodule FerretRescue.Application.Types.AppoveTest do
  use FerretRescue.DataCase, async: true
  use Bamboo.Test
  import FerretRescue.Factory

  alias FerretRescue.Email

  test "approve application" do
    auth = insert(:auth)
    application = insert(:application, approved: false, final: false, reviewed: false)

    doc = """
    mutation {
      approveApplication(id: "#{application.id}") {
        id
        approved
        reviewed
        final
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "approveApplication" => %{
                  "id" => "#{application.id}",
                  "approved" => true,
                  "reviewed" => true,
                  "final" => true
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    expected_email = Email.approval(application)
    assert_delivered_email(expected_email)
  end

  test "no auth" do
    application = insert(:application)

    doc = """
    mutation {
      approveApplication(id: "#{application.id}") {
        id
        approved
        reviewed
        final
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["approveApplication"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema)

    auth = insert(:auth, can_manage_applications: false)

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["approveApplication"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
