defmodule FerretRescue.Plug.AuthTest do
  use FerretRescue.DataCase, async: true
  use Phoenix.ConnTest

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
    {:ok, token, _claims} = Guardian.encode_and_sign("admin")

    conn =
      build_conn()
      |> put_req_header("authorization", "Bearer #{token}")
      |> Auth.call()

    assert %{context: %{auth: true}} == conn.private[:absinthe]
    assert conn.state == :unset
    assert conn.status == nil
  end
end
