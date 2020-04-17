defmodule FerretRescue.Auth.Guardian do
  @moduledoc false
  use Guardian, otp_app: :ferret_rescue

  alias FerretRescue.Auth
  alias FerretRescue.Repo

  def subject_for_token(%Auth{id: id}, _claims), do: {:ok, id}

  def resource_from_claims(%{"sub" => sub}) do
    {:ok, Repo.get!(Auth, sub)}
  end
end
