defmodule Stripe.SessionBehaviour do
  @moduledoc """
  This defines a behaviour for `Stripe.Session` to enable testing with Hammox.
  """

  @type display_item_custom :: %{
    :name => String.t(),
    optional(:description) => String.t() | nil,
    optional(:images) => list(String.t()) | nil
  }
  @type display_item :: %{
    :amount => integer(),
    :currency => String.t(),
    :custom => display_item_custom,
    :quantity => integer(),
    :type => String.t()
  }

  @type t :: %Stripe.Session{
    :id => Stripe.id(),
    :object => String.t(),
    :billing_address_collection => String.t() | nil,
    :cancel_url => String.t(),
    :client_reference_id => String.t() | nil,
    :customer => Stripe.id() | Stripe.Customer.t() | nil,
    :customer_email => String.t() | nil,
    :display_items => list(display_item),
    :livemode => boolean(),
    :locale => boolean() | nil,
    :mode => String.t(),
    :payment_intent => Stripe.id() | Stripe.PaymentIntent.t() | nil,
    :payment_method_types => list(String.t()),
    :setup_intent => Stripe.id() | Stripe.SetupIntent.t() | nil,
    :submit_type => String.t(),
    :subscription => Stripe.id() | Stripe.Subscription.t() | nil,
    :success_url => String.t()
  }

  @type create_params :: %{
    :cancel_url => String.t(),
    :payment_method_types => list(String.t()),
    :success_url => String.t(),
    optional(:client_reference_id) => String.t(),
    optional(:customer_email) => String.t(),
    optional(:line_items) => list(Stripe.Session.line_item),
    optional(:locale) => String.t(),
    optional(:mode) => String.t(),
    optional(:submit_type) => String.t(),
    optional(:payment_intent_data) => Stripe.Session.payment_intent_data,
    optional(:subscription_data) => Stripe.Session.subscription_data
  }

  @callback create(create_params()) ::
              {:ok, t()} | {:error, Stripe.Error.t()}
end
