defmodule FerretRescue.HealthCheckTest do
  use FerretRescue.ConnCase, async: true

  test "health check", %{conn: conn} do
    assert "ok" ==
             conn
             |> get("/_health")
             |> response(200)
  end
end
