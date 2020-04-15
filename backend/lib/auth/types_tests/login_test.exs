defmodule FerretRescue.Auth.Types.LoginTest do
  use FerretRescue.DataCase, async: true

  test "valid login" do
    doc = """
    mutation {
      login(username: "admin", password: "password") {
        token
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "login" => %{
                  "token" => _
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema)
  end

  test "invalid login" do
    doc = """
    mutation {
      login(username: "admin", password: "invalid") {
        token
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [
                %{
                  locations: [
                    %{
                      column: 3,
                      line: 2
                    }
                  ],
                  message: "invalid",
                  path: ["login"]
                }
              ]
            }} ==
             Absinthe.run(doc, FerretRescue.Schema)
  end
end
