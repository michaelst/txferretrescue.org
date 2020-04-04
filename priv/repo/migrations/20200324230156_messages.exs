defmodule FerretRescue.Repo.Migrations.Messages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :application_id, :integer, null: false
      add :timestamp, :naivedatetime, null: false
      add :message, :text, null: false
      add :to_email, :text, null: false
    end
  end
end
