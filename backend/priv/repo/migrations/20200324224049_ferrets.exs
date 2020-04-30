defmodule FerretRescue.Repo.Migrations.Ferrets do
  use Ecto.Migration

  def change do
    create table(:ferrets) do
      add :name, :text, null: false
      add :bio, :text
      add :gender, :text, null: false
      add :age_years, :integer, null: false
      add :age_months, :integer, null: false
      add :available, :boolean, null: false
      add :foster, :boolean, null: false
      add :fee, :decimal, precision: 5, scale: 2, null: false
      add :image_uploaded, :boolean, null: false, default: false

      timestamps()
    end
  end
end
