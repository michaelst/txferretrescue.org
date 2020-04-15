/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSitter
// ====================================================

export interface GetSitter_sitter {
  __typename: "Sitter";
  id: string;
  email: string | null;
  name: string;
  notes: string | null;
  phone: string | null;
}

export interface GetSitter {
  sitter: GetSitter_sitter;
}

export interface GetSitterVariables {
  id: string;
}
