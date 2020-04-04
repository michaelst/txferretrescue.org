defmodule FerretRescue.Repo.Migrations.FaqContent do
  use Ecto.Migration

  def change do
    create table(:faq_content) do
      add :topic_id, references(:faq_topics)
      add :content_title, :text, null: false
      add :content, :text, null: false
      add :rank, integer, null: false
    end
  end
end
