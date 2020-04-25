defmodule FerretRescue.Plug.AuthTest do
  use FerretRescue.ConnCase, async: true
  import FerretRescue.Factory

  alias FerretRescue.Auth.Guardian
  alias FerretRescue.Plug.Auth

  test "works when no token is passed" do
    conn =
      build_conn()
      |> Auth.call()

    assert is_nil(conn.private[:absinthe])
    assert conn.state == :unset
    assert conn.status == nil
  end

  test "works when invalid token is passed" do
    conn =
      build_conn()
      |> put_req_header("authorization", "Bearer invalid")
      |> Auth.call()

    assert is_nil(conn.private[:absinthe])
    assert conn.state == :unset
    assert conn.status == nil
  end

  test "assigns auth true" do
    auth = insert(:auth)
    {:ok, token, _claims} = Guardian.encode_and_sign(auth)

    conn =
      build_conn()
      |> put_req_header("authorization", "Bearer #{token}")
      |> Auth.call()

    assert %{context: %{auth: auth}} == conn.private[:absinthe]
    assert conn.state == :unset
    assert conn.status == nil
  end
end
