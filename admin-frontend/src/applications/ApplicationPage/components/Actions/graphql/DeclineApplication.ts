/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeclineApplication
// ====================================================

export interface DeclineApplication_declineApplication {
  __typename: "Application";
  id: string;
  approved: boolean;
  reviewed: boolean;
  final: boolean;
}

export interface DeclineApplication {
  declineApplication: DeclineApplication_declineApplication;
}

export interface DeclineApplicationVariables {
  id: string;
}
