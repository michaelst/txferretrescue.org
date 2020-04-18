defmodule FerretRescue.Auth.Types.ResetPasswordTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Auth.Guardian

  test "valid reset" do
    %{id: auth_id} = auth = insert(:auth)

    doc = """
    mutation {
      resetPassword(password: "mynewpassword") {
        token
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "resetPassword" => %{
                  "token" => token
                }
              }
            }} = Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})

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

  test "new password is not long enough" do
    auth = insert(:auth)

    doc = """
    mutation {
      resetPassword(password: "password") {
        token
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "password: should be at least 12 characters",
                  path: ["resetPassword"]
                }
              ]
            }} = Absinthe.run(doc, FerretRescue.Schema, context: %{auth: auth})
  end

  test "not authenticated" do
    doc = """
    mutation {
      resetPassword(password: "password") {
        token
      }
    }
    """

    assert {:ok,
            %{
              data: nil,
              errors: [
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "missing_token",
                  path: ["resetPassword"]
                }
              ]
            }} = Absinthe.run(doc, FerretRescue.Schema)
  end
end
