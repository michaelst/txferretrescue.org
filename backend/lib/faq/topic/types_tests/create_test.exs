defmodule FerretRescue.FAQ.Topic.Types.CreateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "create FAQ topic" do
    auth = insert(:auth)

    doc = """
    mutation {
      createFaqTopic(input: { name: "Basic", rank: 1 }) {
        name
        rank
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createFaqTopic" => %{
                  "name" => "Basic",
                  "rank" => 1
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
