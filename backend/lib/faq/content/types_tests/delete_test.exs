defmodule FerretRescue.FAQ.Content.Types.DeleteTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.FAQ.Content
  alias FerretRescue.Repo

  test "delete FAQ content" do
    auth = insert(:auth)
    topic = insert(:faq_topic)
    content = insert(:faq_content, topic: topic)

    doc = """
    mutation {
      deleteFaqContent(id: "#{content.id}") {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "deleteFaqContent" => %{
                  "id" => "#{content.id}"
                }
              }
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    refute Repo.get(Content, content.id)
  end
end
