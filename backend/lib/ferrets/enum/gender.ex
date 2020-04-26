defmodule FerretRescue.Ferret.Enum.Gender do
  @moduledoc """
  Enum defining gender type.
  """
  use FerretRescue.Utils.Enum,
    type: :gender,
    values: [
      %{name: :male},
      %{name: :female}
    ]
end
