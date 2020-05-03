defmodule FerretRescue.Application.Types do
  @moduledoc """
  Defines absinthe types for application schema.
  """
  use Absinthe.Schema.Notation
  import Absinthe.Resolution.Helpers, only: [dataloader: 1]

  alias FerretRescue.Application
  alias FerretRescue.Application.Resolver

  object :application do
    field :id, non_null(:id)
    field :age, non_null(:integer)
    field :approved, non_null(:boolean)
    field :cage_info, non_null(:string)
    field :city, non_null(:string)
    field :diseases_info, non_null(:string)
    field :eat_info, non_null(:string)
    field :email, non_null(:string)
    field :final, non_null(:boolean)
    field :forever_home, non_null(:string)
    field :fostering, non_null(:boolean)
    field :heartworm_prevent, non_null(:string)
    field :heartworm_treat, non_null(:boolean)
    field :heartworms, non_null(:boolean)
    field :home_type, non_null(:string)
    field :kept_info, non_null(:string)
    field :landlord_info, :string
    field :legal_to_own, non_null(:boolean)
    field :move_info, non_null(:string)
    field :name, non_null(:string)
    field :notes, :string
    field :num_ferrets_info, non_null(:string)
    field :other_animals, non_null(:string)
    field :own_home, non_null(:boolean)
    field :owned_before, non_null(:boolean)
    field :owned_details, :string
    field :people_at_address, non_null(:string)
    field :phone_primary, non_null(:string)
    field :phone_secondary, :string
    field :play_info, non_null(:string)
    field :proofing_info, non_null(:string)
    field :reviewed, non_null(:boolean)
    field :smoker, non_null(:boolean)
    field :state, non_null(:string)
    field :street, non_null(:string)
    field :surrendered_details, :string
    field :surrendered, non_null(:boolean)
    field :time_at_address, :string
    field :toy_info, non_null(:string)
    field :vaccines_current, non_null(:boolean)
    field :vet_info, non_null(:string)
    field :zip_code, non_null(:integer)

    field :messages, :message |> non_null |> list_of |> non_null, resolve: dataloader(FerretRescue)
  end

  enum :application_status do
    value(:all)
    value(:needs_review)
  end

  input_object :application_filters do
    field(:status, non_null(:application_status))
    field(:search, :string)
  end

  object :application_queries do
    field :applications, :application |> non_null |> list_of |> non_null do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_applications)
      arg(:page, non_null(:integer))
      arg(:filter, :application_filters)
      resolve(&Resolver.list/2)
    end

    field :application, non_null(:application) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_applications)
      middleware(FerretRescue.Middleware.LoadModel, module: Application)
      arg(:id, non_null(:id))
      resolve(&Resolver.get/2)
    end
  end

  input_object :application_create_input do
    field(:age, non_null(:integer))
    field(:cage_info, non_null(:string))
    field(:city, non_null(:string))
    field(:diseases_info, non_null(:string))
    field(:eat_info, non_null(:string))
    field(:email, non_null(:string))
    field(:forever_home, non_null(:string))
    field(:fostering, non_null(:boolean))
    field(:heartworm_prevent, non_null(:string))
    field(:heartworm_treat, non_null(:boolean))
    field(:heartworms, non_null(:boolean))
    field(:home_type, non_null(:string))
    field(:kept_info, non_null(:string))
    field(:landlord_info, :string)
    field(:legal_to_own, non_null(:boolean))
    field(:move_info, non_null(:string))
    field(:name, non_null(:string))
    field(:notes, :string)
    field(:num_ferrets_info, non_null(:string))
    field(:other_animals, non_null(:string))
    field(:own_home, non_null(:boolean))
    field(:owned_before, non_null(:boolean))
    field(:owned_details, :string)
    field(:people_at_address, non_null(:string))
    field(:phone_primary, non_null(:string))
    field(:phone_secondary, :string)
    field(:play_info, non_null(:string))
    field(:proofing_info, non_null(:string))
    field(:smoker, non_null(:boolean))
    field(:state, non_null(:string))
    field(:street, non_null(:string))
    field(:surrendered_details, :string)
    field(:surrendered, non_null(:boolean))
    field(:time_at_address, :string)
    field(:toy_info, non_null(:string))
    field(:vaccines_current, non_null(:boolean))
    field(:vet_info, non_null(:string))
    field(:zip_code, non_null(:integer))
  end

  input_object :application_update_input do
    field(:reviewed, :boolean)
    field(:final, :boolean)
  end

  object :application_mutations do
    field :create_application, non_null(:application) do
      arg(:input, non_null(:application_create_input))
      resolve(&Resolver.create/2)
    end

    field :update_application, non_null(:application) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_applications)
      middleware(FerretRescue.Middleware.LoadModel, module: Application)
      arg(:id, non_null(:id))
      arg(:input, non_null(:application_update_input))
      resolve(&Resolver.update/2)
    end

    field :decline_application, non_null(:application) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_applications)
      middleware(FerretRescue.Middleware.LoadModel, module: Application)
      arg(:id, non_null(:id))
      resolve(&Resolver.decline/2)
    end

    field :send_message, non_null(:application) do
      middleware(FerretRescue.Middleware.RequireAuthentication, permission: :manage_applications)
      middleware(FerretRescue.Middleware.LoadModel, module: Application)
      arg(:id, non_null(:id))
      arg(:message, non_null(:string))
      resolve(&Resolver.send_message/2)
    end
  end
end
