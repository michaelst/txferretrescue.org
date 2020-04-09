/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStripeCheckoutSession
// ====================================================

export interface GetStripeCheckoutSession_stripeCheckoutSession {
  __typename: "StripeCheckoutSession";
  id: string;
}

export interface GetStripeCheckoutSession {
  stripeCheckoutSession: GetStripeCheckoutSession_stripeCheckoutSession;
}

export interface GetStripeCheckoutSessionVariables {
  amount: number;
}
