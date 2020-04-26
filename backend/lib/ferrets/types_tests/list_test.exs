defmodule FerretRescue.Ferret.Types.ListTest do
  use FerretRescue.DataCase, async: true
  import FerretRescue.Factory

  test "list all" do
    ferret = insert(:ferret)
    foster = insert(:ferret, foster: true)

    doc = """
    query {
      ferrets(all: true) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "ferrets" => [
                  %{
                    "id" => "#{ferret.id}"
                  },
                  %{
                    "id" => "#{foster.id}"
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end

  test "list ferrets" do
    ferret = insert(:ferret)
    # foster should be excluded
    insert(:ferret, foster: true)

    doc = """
    query {
      ferrets(foster: false) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "ferrets" => [
                  %{
                    "id" => "#{ferret.id}"
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end

  test "list fosters" do
    # non-foster should be excluded
    insert(:ferret)
    foster = insert(:ferret, foster: true)

    doc = """
    query {
      ferrets(foster: true) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "ferrets" => [
                  %{
                    "id" => "#{foster.id}"
                  }
                ]
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end

  test "empty" do
    doc = """
    query {
      ferrets(foster: true) {
        id
      }
    }
    """

    assert {:ok,
            %{
              data: %{
                "ferrets" => []
              }
            }} == Absinthe.run(doc, FerretRescue.Schema)
  end
end