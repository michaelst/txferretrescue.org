defmodule FerretRescue.Factory do
  @moduledoc """
  Main ExMachina factory.

  Use in tests by doing `import FerretRescue.Factory`.
  """
  use ExMachina.Ecto, repo: FerretRescue.Repo
  use FerretRescue.Ferret.Factory
end