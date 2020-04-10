defmodule FerretRescue.Application.Types do
  @moduledoc """
  Defines absinthe types for application schema.
  """

  use Absinthe.Schema.Notation

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
    field :reviewd, non_null(:boolean)
    field :smoker, non_null(:boolean)
    field :state, non_null(:string)
    field :street, non_null(:string)
    field :surrendered_details, non_null(:string)
    field :surrendered, non_null(:boolean)
    field :time_at_address, :string
    field :toy_info, non_null(:string)
    field :vaccines_current, non_null(:boolean)
    field :vet_info, :string
    field :zip_code, non_null(:integer)
  end

  object :application_mutations do
    field :create_application, :application do
      arg(:age, non_null(:integer))
      arg(:cage_info, non_null(:string))
      arg(:city, non_null(:string))
      arg(:diseases_info, non_null(:string))
      arg(:eat_info, non_null(:string))
      arg(:email, non_null(:string))
      arg(:forever_home, non_null(:string))
      arg(:fostering, non_null(:boolean))
      arg(:heartworm_prevent, non_null(:string))
      arg(:heartworm_treat, non_null(:boolean))
      arg(:heartworms, non_null(:boolean))
      arg(:home_type, non_null(:string))
      arg(:kept_info, non_null(:string))
      arg(:landlord_info, :string)
      arg(:legal_to_own, non_null(:boolean))
      arg(:move_info, non_null(:string))
      arg(:name, non_null(:string))
      arg(:notes, :string)
      arg(:num_ferrets_info, non_null(:string))
      arg(:other_animals, non_null(:string))
      arg(:own_home, non_null(:boolean))
      arg(:owned_before, non_null(:boolean))
      arg(:owned_details, :string)
      arg(:people_at_address, non_null(:string))
      arg(:phone_primary, non_null(:string))
      arg(:phone_secondary, :string)
      arg(:play_info, non_null(:string))
      arg(:proofing_info, non_null(:string))
      arg(:smoker, non_null(:boolean))
      arg(:state, non_null(:string))
      arg(:street, non_null(:string))
      arg(:surrendered_details, non_null(:string))
      arg(:surrendered, non_null(:boolean))
      arg(:time_at_address, :string)
      arg(:toy_info, non_null(:string))
      arg(:vaccines_current, non_null(:boolean))
      arg(:vet_info, :string)
      arg(:zip_code, non_null(:integer))

      resolve(&Resolver.create/2)
    end
  end
end
