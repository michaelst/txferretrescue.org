defmodule FerretRescue.Repo.Migrations.Vets do
  use Ecto.Migration

  def change do
    create table(:vets) do
      add :company_name, :text
      add :website, :text
      add :vet_name, :text
      add :street, :text
      add :city, :text
      add :state, :text
      add :zip, :text
      add :phone, :text
      add :notes, :text

      timestamps()
    end
  end
end
