defmodule FerretRescue.Middleware.LoadModelTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Ferret

  defmodule Schema do
    use Absinthe.Schema

    object :ferret do
      field :id, :id
    end

    query do
    end

    mutation do
      field :update_ferret, :ferret do
        middleware(FerretRescue.Middleware.LoadModel, module: Ferret)
        arg(:id, non_null(:id))
        resolve(fn _args, %{context: %{model: model}} -> {:ok, model} end)
      end
    end
  end

  test "successfully load model" do
    ferret = insert(:ferret)

    doc = """
    mutation {
      updateFerret(id: #{ferret.id}) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateFerret" => %{
                  "id" => "#{ferret.id}"
                }
              }
            }} == Absinthe.run(doc, Schema)
  end

  test "model doesn't exist" do
    doc = """
    mutation {
      updateFerret(id: 99999999) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{"updateFerret" => nil},
              errors: [%{locations: [%{column: 3, line: 2}], message: "not found", path: ["updateFerret"]}]
            }} == Absinthe.run(doc, Schema)
  end
end
