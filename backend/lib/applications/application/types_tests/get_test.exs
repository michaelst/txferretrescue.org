defmodule FerretRescue.Application.Types.GetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get application" do
    auth = insert(:auth)
    application = insert(:application)

    doc = """
    query {
      application(id: "#{application.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "application" => %{
                  "id" => "#{application.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "no auth" do
    application = insert(:application)

    doc = """
    query {
      application(id: "#{application.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["application"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema)

    auth = insert(:auth, can_manage_applications: false)

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["application"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
