defmodule FerretRescue.Middleware.RequireAuthenticationTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  defmodule Schema do
    use Absinthe.Schema

    object :ferret do
      field :result, :string
    end

    query do
    end

    mutation do
      field :update_ferret, :ferret do
        middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_ferrets)
        resolve(fn _args, _resolution -> {:ok, %{result: "authenticated"}} end)
      end
    end
  end

  test "is authenticated" do
    auth = insert(:auth)

    doc = """
    mutation {
      updateFerret {
        result
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateFerret" => %{
                  "result" => "authenticated"
                }
              }
            }} == Absinthe.run(doc, Schema, context: %{auth: auth})
  end

  test "not authenticated" do
    doc = """
    mutation {
      updateFerret {
        result
      }
    }
    """

    assert {:ok,
            %{
              data: %{"updateFerret" => nil},
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["updateFerret"]}]
            }} == Absinthe.run(doc, Schema)
  end
end
