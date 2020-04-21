defmodule FerretRescue.FAQ.Topic.Types.DeleteTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.FAQ.Topic
  alias FerretRescue.Repo

  test "delete FAQ topic" do
    auth = insert(:auth)
    topic = insert(:faq_topic)

    doc = """
    mutation {
      deleteFaqTopic(id: "#{topic.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "deleteFaqTopic" => %{
                  "id" => "#{topic.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute Repo.get(Topic, topic.id)
  end
end
