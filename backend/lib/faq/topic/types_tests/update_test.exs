defmodule FerretRescue.FAQ.Topic.Types.UpdateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update FAQ topic" do
    auth = insert(:auth)
    topic = insert(:faq_topic)

    doc = """
    mutation {
      updateFaqTopic(id: "#{topic.id}", input: { name: "New name" }) {
        id
        name
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateFaqTopic" => %{
                  "id" => "#{topic.id}",
                  "name" => "New name"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
