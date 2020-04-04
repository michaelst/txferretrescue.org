defmodule FerretRescue.Repo.Migrations.FaqContent do
  use Ecto.Migration

  def change do
    create table(:faq_content) do
      add :topic_id, references(:faq_topics), null: false
      add :title, :text, null: false
      add :content, :text, null: false
      add :rank, :integer, null: false

      timestamps()
    end

    create index(:faq_content, [:topic_id])
  end
end
