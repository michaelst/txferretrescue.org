defmodule FerretRescue.MixProject do
  use Mix.Project

  def project do
    [
      aliases: aliases(),
      app: :ferret_rescue,
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      deps: deps(),
      elixir: "~> 1.5",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      test_coverage: [tool: ExCoveralls],
      test_paths: ["lib"],
      version: "0.1.0"
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {FerretRescue, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:absinthe_plug, "~> 1.5.0-rc.2"},
      {:absinthe, "~> 1.5.0-rc.5"},
      {:bamboo, "~> 1.4"},
      {:bcrypt_elixir, "~> 2.0"},
      {:cors_plug, "~> 2.0"},
      {:credo, "~> 1.3", only: [:dev, :test], runtime: false},
      {:dataloader, "~> 1.0.0"},
      {:ecto_enum, "~> 1.4"},
      {:ecto_sql, "~> 3.4"},
      {:ex_machina, "~> 2.4"},
      {:excoveralls, "~> 0.13.0"},
      {:gettext, "~> 0.11"},
      {:google_api_storage, "~> 0.20"},
      {:goth, "~> 1.2"},
      {:guardian, "~> 2.0"},
      {:hammox, "~> 0.2.2", only: :test},
      {:jason, "~> 1.2", override: true},
      {:logger_json, "~> 4.0"},
      {:phoenix_ecto, "~> 4.0"},
      {:phoenix_html, "~> 2.11"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:phoenix, "~> 1.5"},
      {:plug_cowboy, "~> 2.0"},
      {:postgrex, ">= 0.0.0"},
      {:sentry, "~> 8.0"},
      {:stripity_stripe, "~> 2.9.0"}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate", "test"]
    ]
  end
end
