defmodule FerretRescue.FAQ.Content.Types.CreateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "create FAQ content" do
    auth = insert(:auth)
    topic = insert(:faq_topic)

    doc = """
    mutation {
      createFaqContent(input: { title: "Basic", content: "Some content", rank: 1, topic_id: "#{topic.id}" }) {
        title
        content
        rank
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "createFaqContent" => %{
                  "title" => "Basic",
                  "content" => "Some content",
                  "rank" => 1
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
