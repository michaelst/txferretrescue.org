/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSitter
// ====================================================

export interface CreateSitter_createSitter {
  __typename: "Sitter";
  id: string;
  email: string | null;
  name: string;
  phone: string | null;
}

export interface CreateSitter {
  createSitter: CreateSitter_createSitter;
}

export interface CreateSitterVariables {
  email?: string | null;
  name: string;
  notes?: string | null;
  phone?: string | null;
}
