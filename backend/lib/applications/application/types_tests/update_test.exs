defmodule FerretRescue.Application.Types.UpdateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update application" do
    auth = insert(:auth)
    application = insert(:application)

    doc = """
    mutation {
      updateApplication(id: "#{application.id}", input: {reviewed: true, final: true}) {
        id
        reviewed
        final
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateApplication" => %{
                  "id" => "#{application.id}",
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
      updateApplication(id: "#{application.id}", input: {reviewed: true, final: true}) {
        id
        reviewed
        final
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["updateApplication"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema)

    auth = insert(:auth, can_manage_applications: false)

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["updateApplication"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
