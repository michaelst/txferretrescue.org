defmodule FerretRescue.Repo.Migrations.FaqTopics do
  use Ecto.Migration

  def change do
    create table(:faq_topics) do
      add :name, :text, null: false
      add :rank, :integer, null: false

      timestamps()
    end
  end
end
