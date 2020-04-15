defmodule FerretRescue.Repo.Migrations.Sitters do
  use Ecto.Migration

  def change do
    create table(:sitters) do
      add :name, :text, null: false
      add :phone, :text
      add :email, :text
      add :notes, :text

      timestamps()
    end
  end
end
