defmodule FerretRescue.FAQ.Content.Types.UpdateTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "update FAQ content" do
    auth = insert(:auth)
    topic = insert(:faq_topic)
    content = insert(:faq_content, topic: topic)

    doc = """
    mutation {
      updateFaqContent(id: "#{content.id}", input: { title: "New title" }) {
        id
        title
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "updateFaqContent" => %{
                  "id" => "#{content.id}",
                  "title" => "New title"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
