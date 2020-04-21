defmodule FerretRescue.FAQ.Content.Types.GetTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "get FAQ content" do
    topic = insert(:faq_topic)
    content = insert(:faq_content, topic: topic)

    doc = """
    query {
      faqContent(id: "#{content.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "faqContent" => %{
                  "id" => "#{content.id}",
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
