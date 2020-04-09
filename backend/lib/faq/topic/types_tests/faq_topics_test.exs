defmodule FerretRescue.FAQ.Topic.Types.FAQTopicsTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list FAQ Topics" do
    first_topic = insert(:faq_topic, rank: 1)
    first_topic_first_content = insert(:faq_content, rank: 1, topic: first_topic)
    first_topic_second_content = insert(:faq_content, rank: 2, topic: first_topic)

    second_topic = insert(:faq_topic, rank: 2)
    second_topic_first_content = insert(:faq_content, rank: 1, topic: second_topic)
    second_topic_second_content = insert(:faq_content, rank: 2, topic: second_topic)

    doc = """
    query {
      faqTopics {
        id
        questions {
          id
        }
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "faqTopics" => [
                  %{
                    "id" => "#{first_topic.id}",
                    "questions" => [
                      %{
                        "id" => "#{first_topic_first_content.id}"
                      },
                      %{
                        "id" => "#{first_topic_second_content.id}"
                      }
                    ]
                  },
                  %{
                    "id" => "#{second_topic.id}",
                    "questions" => [
                      %{
                        "id" => "#{second_topic_first_content.id}"
                      },
                      %{
                        "id" => "#{second_topic_second_content.id}"
                      }
                    ]
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end
