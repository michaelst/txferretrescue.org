defmodule FerretRescue.Schema do
  @moduledoc """
  Absinthe schema file.
  """
  use Absinthe.Schema

  import_types(FerretRescue.Application.Types)
  import_types(FerretRescue.Auth.Types)
  import_types(FerretRescue.FAQ.Content.Types)
  import_types(FerretRescue.FAQ.Topic.Types)
  import_types(FerretRescue.Ferret.Types)
  import_types(FerretRescue.Resources.Sitter.Types)
  import_types(FerretRescue.Resources.Vet.Types)
  import_types(FerretRescue.Stripe.Types)

  query do
    import_fields(:faq_topic_queries)
    import_fields(:ferret_queries)
    import_fields(:sitter_queries)
    import_fields(:stripe_queries)
    import_fields(:vet_queries)
  end

  mutation do
    import_fields(:application_mutations)
    import_fields(:auth_mutations)
    import_fields(:sitter_mutations)
  end

  def context(ctx) do
    loader =
      Dataloader.new()
      |> Dataloader.add_source(FerretRescue, FerretRescue.data())

    Map.put(ctx, :loader, loader)
  end

  def plugins do
    [Absinthe.Middleware.Dataloader] ++ Absinthe.Plugin.defaults()
  end

  def middleware(middleware, _field, %{identifier: :mutation}) do
    # this middleware needs to append to the end
    # credo:disable-for-next-line Credo.Check.Refactor.AppendSingleItem
    middleware ++ [FerretRescue.Middleware.ChangesetErrors]
  end

  def middleware(middleware, _field, _object), do: middleware
end
