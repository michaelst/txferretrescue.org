defmodule FerretRescue.Repo.Migrations.Messages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :application_id, references(:applications), null: false
      add :message, :text, null: false
      add :to_email, :text, null: false

      timestamps()
    end

    create index(:messages, [:application_id])
  end
end
