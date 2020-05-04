defmodule FerretRescue.Application.Types.DeclineTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "decline application" do
    auth = insert(:auth)
    application = insert(:application, approved: true, final: false, reviewed: false)

    doc = """
    mutation {
      declineApplication(id: "#{application.id}") {
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
                "declineApplication" => %{
                  "id" => "#{application.id}",
                  "approved" => false,
                  "reviewed" => true,
                  "final" => true
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "no auth" do
    application = insert(:application)

    doc = """
    mutation {
      declineApplication(id: "#{application.id}") {
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
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["declineApplication"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema)

    auth = insert(:auth, can_manage_applications: false)

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["declineApplication"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
