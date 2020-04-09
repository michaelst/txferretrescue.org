ExUnit.start()
Ecto.Adapters.SQL.Sandbox.mode(FerretRescue.Repo, :manual)
Absinthe.Test.prime(FerretRescue.Schema)
Hammox.defmock(Stripe.SessionMock, for: Stripe.SessionBehaviour)
