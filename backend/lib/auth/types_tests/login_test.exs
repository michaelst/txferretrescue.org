defmodule FerretRescue.Auth.Types.LoginTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Auth.Guardian

  test "valid login" do
    auth_id = insert(:auth).id

    doc = """
    mutation {
      login(email: "test@example.com", password: "password") {
        token
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "login" => %{
                  "token" => token
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema)

    assert {:ok,
            %{
              "aud" => "https://api.txferretrescue.org",
              "exp" => _,
              "iat" => _,
              "iss" => "https://api.txferretrescue.org",
              "jti" => _,
              "nbf" => _,
              "sub" => ^auth_id,
              "typ" => "access"
            }} = Guardian.decode_and_verify(token)
  end

  test "email doesn't exist" do
    doc = """
    mutation {
      login(email: "admin@example.com", password: "invalid") {
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

  test "wrong password" do
    insert(:auth)

    doc = """
    mutation {
      login(email: "test@example.com", password: "invalid") {
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
