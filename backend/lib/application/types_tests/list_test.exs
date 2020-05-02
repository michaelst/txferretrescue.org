defmodule FerretRescue.Application.Types.ListTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list applications" do
    auth = insert(:auth)
    application = insert(:application, name: "Michael")
    insert(:application)

    doc = """
    query {
      applications(page: 1, filter: {status: NEEDS_REVIEW, search: "michael"}) {
        id
        name
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "applications" => [
                  %{
                    "id" => "#{application.id}",
                    "name" => "Michael"
                  },
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "no auth" do
    doc = """
    query {
      applications(page: 1, filter: {status: ALL}) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["applications"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema)

    auth = insert(:auth, can_manage_applications: false)

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["applications"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
