defmodule FerretRescue.Repo.Migrations.Ferrets do
  use Ecto.Migration

  def change do
    create table(:ferrets) do
      add :name, :text, null: false
      add :bio, :text
      add :gender, :text, null: false
      add :age_years, :integer, null: false, defualt: 0
      add :age_months, :integer, null: false, defualt: 0
      add :available, :boolean, null: false, default: false
      add :foster, :boolean, null: false, default: false
      add :fee, :decimal, precision: 5, scale: 2, default: 0

      timestamps()
    end
  end
end
