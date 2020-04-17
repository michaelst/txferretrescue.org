defmodule FerretRescue.Factory do
  @moduledoc """
  Main ExMachina factory.

  Use in tests by doing `import FerretRescue.Factory`.
  """
  use ExMachina.Ecto, repo: FerretRescue.Repo
  use FerretRescue.Auth.Factory
  use FerretRescue.FAQ.Content.Factory
  use FerretRescue.FAQ.Topic.Factory
  use FerretRescue.Ferret.Factory
  use FerretRescue.Resources.Sitter.Factory
  use FerretRescue.Resources.Vet.Factory
end
