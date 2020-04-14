/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateSitter
// ====================================================

export interface UpdateSitter_updateSitter {
  __typename: "Sitter";
  id: string;
  email: string | null;
  name: string;
  phone: string | null;
}

export interface UpdateSitter {
  updateSitter: UpdateSitter_updateSitter;
}

export interface UpdateSitterVariables {
  id: string;
  email?: string | null;
  name: string;
  notes?: string | null;
  phone?: string | null;
}
