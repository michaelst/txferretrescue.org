defmodule FerretRescue.RouterTest do
  use FerretRescueWeb.ConnCase

  test "graphql", %{conn: conn} do
    query = """
      query {
        ferrets(foster: false) {
          id
        }
      }
    """

    conn
    |> post("/graphql", %{query: query})
    |> json_response(200)
  end
end
