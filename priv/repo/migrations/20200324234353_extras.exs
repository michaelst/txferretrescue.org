defmodule FerretRescue.Repo.Migrations.Extras do
  use Ecto.Migration

  def change do
    create table(:extras) do
      add :type, :text
      add :content, :text
    end
  end
end
