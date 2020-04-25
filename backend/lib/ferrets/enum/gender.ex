defmodule FerretRescue.Ferret.Enum.Gender do
  use FerretRescue.Utils.Enum,
    type: :gender,
    values: [
      %{name: :male},
      %{name: :female}
    ]
end
