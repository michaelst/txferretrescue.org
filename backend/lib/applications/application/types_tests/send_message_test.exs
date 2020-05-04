defmodule FerretRescue.Application.Types.SendMessageTest do
  use FerretRescue.DataCase, async: true
  use Bamboo.Test
  import FerretRescue.Factory

  alias FerretRescue.Applications.Message
  alias FerretRescue.Email
  alias FerretRescue.Repo

  test "send message" do
    auth = insert(:auth)
    application = insert(:application, approved: false, final: false, reviewed: false)

    doc = """
    mutation {
      sendMessage(id: "#{application.id}", message: "test message") {
        messages {
          id
          message
        }
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "sendMessage" => %{
                  "messages" => [
                    %{
                      "id" => message_id,
                      "message" => "test message"
                    }
                  ]
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

    expected_email = Repo.get(Message, message_id) |> Email.send_message(application.email)
    assert_delivered_email(expected_email)
  end

  test "no auth" do
    application = insert(:application)

    doc = """
    mutation {
      sendMessage(id: "#{application.id}", message: "test message") {
        id
        messages {
          message
        }
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["sendMessage"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema)

    auth = insert(:auth, can_manage_applications: false)

    assert {:ok,
            %{
              data: nil,
              errors: [%{locations: [%{column: 3, line: 2}], message: "unauthenticated", path: ["sendMessage"]}]
            }} == Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end
end
