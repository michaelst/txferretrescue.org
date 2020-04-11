defmodule FerretRescue.Middleware.ChangesetErrorsTest do
  use FerretRescue.DataCase, async: true

  alias FerretRescue.Application.Resolver

  defmodule Schema do
    use Absinthe.Schema

    query do
    end

    mutation do
      field :create_application, :string do
        resolve(&Resolver.create/2)
      end
    end

    def middleware(middleware, _field, %{identifier: :mutation}) do
      # this middleware needs to append to the end
      # credo:disable-for-next-line Credo.Check.Refactor.AppendSingleItem
      middleware ++ [FerretRescue.Middleware.ChangesetErrors]
    end

    def middleware(middleware, _field, _object), do: middleware
  end

  test "changeset errors returned correctly" do
    doc = """
    mutation {
      createApplication
    }
    """

    assert {:ok,
            %{
              data: %{"createApplication" => nil},
              errors: [
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "owned_before: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "email: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "heartworm_prevent: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "cage_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "time_at_address: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "legal_to_own: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "heartworms: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "num_ferrets_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "diseases_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "kept_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "other_animals: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "zip_code: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "eat_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "vaccines_current: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "smoker: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "surrendered: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "proofing_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "age: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "street: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "vet_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "play_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "name: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "people_at_address: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "state: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "own_home: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "phone_primary: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "forever_home: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "heartworm_treat: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "home_type: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "move_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "toy_info: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "fostering: can't be blank",
                  path: ["createApplication"]
                },
                %{
                  locations: [%{column: 3, line: 2}],
                  message: "city: can't be blank",
                  path: ["createApplication"]
                }
              ]
            }} == Absinthe.run(doc, Schema)
  end
end
