defmodule FerretRescue.Auth.Guardian do
  @moduledoc false
  use Guardian, otp_app: :ferret_rescue

  def subject_for_token(sub, _claims), do: {:ok, sub}

  def resource_from_claims(%{"sub" => sub}), do: {:ok, sub}
end
