defmodule FerretRescue.Repo.Migrations.Messages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :application_id, references(:applications), null: false
      add :message, :text, null: false

      timestamps(inserted_at: :sent_at, updated_at: false)
    end

    create index(:messages, [:application_id])
  end
end
