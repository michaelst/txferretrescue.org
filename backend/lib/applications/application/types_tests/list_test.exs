defmodule FerretRescue.Application.Types.ListTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list applications that need review" do
    auth = insert(:auth)
    application = insert(:application)
    insert(:application, final: true)

    doc = """
    query {
      applications(page: 1, filter: {status: NEEDS_REVIEW}) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "applications" => [
                  %{"id" => "#{application.id}"}
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "list all applications" do
    auth = insert(:auth)
    application = insert(:application)
    reviewed_application = insert(:application, final: true)

    doc = """
    query {
      applications(page: 1, filter: {status: ALL, search: ""}) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "applications" => [
                  %{"id" => "#{reviewed_application.id}"},
                  %{"id" => "#{application.id}"}
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "application search" do
    auth = insert(:auth)
    application = insert(:application, name: "Michael")
    insert(:application)

    doc = """
    query {
      applications(page: 1, filter: {status: ALL, search: "michael"}) {
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
                  }
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
