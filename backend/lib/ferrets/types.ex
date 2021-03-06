defmodule FerretRescue.Ferret.Types do
  @moduledoc """
  Defines absinthe types for ferret schema.
  """
  use Absinthe.Schema.Notation

  alias FerretRescue.Ferret
  alias FerretRescue.Ferret.Resolver

  import_types(FerretRescue.Ferret.Enum.Gender)

  object :ferret do
    field :id, non_null(:id)
    field :age_months, non_null(:integer)
    field :age_years, non_null(:integer)
    field :available, non_null(:boolean)
    field :bio, :string
    field :fee, non_null(:string)
    field :foster, non_null(:boolean)
    field :gender, non_null(:gender)
    field :name, non_null(:string)

    field :image, :string do
      resolve(fn
        %{id: id, image_uploaded: true, updated_at: updated_at}, _args, _resolution ->
          timestamp = NaiveDateTime.to_iso8601(updated_at, :basic)
          {:ok, "https://storage.googleapis.com/ferret-rescue/ferret-images/#{id}.jpg?#{timestamp}"}

        _ferret, _args, _resolution ->
          {:ok, nil}
      end)
    end
  end

  input_object :ferret_input do
    field :age_months, :integer
    field :age_years, :integer
    field :available, :boolean
    field :bio, :string
    field :fee, :string
    field :foster, :boolean
    field :gender, :gender
    field :name, :string
    field :image_upload, :upload
  end

  object :ferret_queries do
    field :ferrets, :ferret |> non_null |> list_of |> non_null do
      arg(:foster, :boolean)
      arg(:all, :boolean)
      resolve(&Resolver.list/2)
    end

    field :ferret, non_null(:ferret) do
      middleware(FerretRescue.Middleware.LoadModel, module: Ferret)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  object :ferret_mutations do
    field :create_ferret, non_null(:ferret) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_ferrets)
      arg(:input, non_null(:ferret_input))
      resolve(&Resolver.create/2)
    end

    field :update_ferret, non_null(:ferret) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_ferrets)
      middleware(FerretRescue.Middleware.LoadModel, module: Ferret)
      arg(:id, non_null(:id))
      arg(:input, non_null(:ferret_input))
      resolve(&Resolver.update/2)
    end

    field :delete_ferret, non_null(:ferret) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_ferrets)
      middleware(FerretRescue.Middleware.LoadModel, module: Ferret)
      arg(:id, non_null(:id))
      resolve(&Resolver.delete/2)
    end
  end
end
