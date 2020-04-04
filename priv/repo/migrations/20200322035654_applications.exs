defmodule FerretRescue.Repo.Migrations.Applications do
  use Ecto.Migration

  def change do
    create table(:applications) do
      add :name, :text, null: false
      add :age, :integer, null: false
      add :street, :text, null: false
      add :city, :text, null: false
      add :state, :text, null: false
      add :zip_code, :integer, null: false
      add :time_at_address, :text
      add :phone_primary, :text, null: false
      add :phone_secondary, :text
      add :email, :text, null: false
      add :people_at_address, :text, null: false
      add :home_type, :text, null: false
      add :own_home, :boolean, null: false
      add :landlord_info, :text
      add :smoker, :boolean, null: false
      add :legal_to_own, :text, null: false
      add :owned_before, :boolean, null: false
      add :owned_details, :text
      add :other_animals, :text, null: false
      add :vaccines_current, :boolean, null: false
      add :vet_info, :text
      add :surrendered, :boolean, null: false
      add :surrendered_details, :text, null: false
      add :eat_info, :text, null: false
      add :kept_info, :text, null: false
      add :proofing_info, :text, null: false
      add :num_ferrets_info, :text, null: false
      add :cage_info, :text, null: false
      add :play_info, :text, null: false
      add :toy_info, :text, null: false
      add :diseases_info, :text, null: false
      add :heartworms, :boolean, null: false
      add :heartworm_treat, :boolean, null: false
      add :heartworm_prevent, :text, null: false
      add :move_info, :text, null: false
      add :forever_home, :text, null: false
      add :notes, :text
      add :fostering, :boolean, null: false
      add :reviewd, :boolean, null: false, default: false
      add :approved, :boolean, null: false, defualt: false
      add :final, :boolean, null: false, defualt: false

      timestamps()
    end
  end
end
