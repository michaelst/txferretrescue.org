defmodule FerretRescue.Repo.Migrations.Users do
  use Ecto.Migration

  def change do
    execute("CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;", "")

    create table(:auth) do
      add :email, :citext, null: false
      add :password, :text
      add :can_manage_applications, :boolean, null: false, default: false
      add :can_manage_users, :boolean, null: false, default: false
      add :can_manage_ferrets, :boolean, null: false, default: false
      add :can_manage_website, :boolean, null: false, default: false

      timestamps()
    end

    create unique_index(:auth, [:email])
  end
end
