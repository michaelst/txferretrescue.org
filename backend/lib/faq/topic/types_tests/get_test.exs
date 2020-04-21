defmodule FerretRescue.FAQ.Topic.Types.GetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get FAQ topic" do
    topic = insert(:faq_topic)

    doc = """
    query {
      faqTopic(id: "#{topic.id}") {
        id
        name
        rank
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "faqTopic" => %{
                  "id" => "#{topic.id}",
                  "name" => topic.name,
                  "rank" => topic.rank
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
