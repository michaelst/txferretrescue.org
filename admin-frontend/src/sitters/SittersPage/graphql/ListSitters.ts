/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListSitters
// ====================================================

export interface ListSitters_sitters {
  __typename: "Sitter";
  id: string;
  email: string | null;
  name: string;
  phone: string | null;
}

export interface ListSitters {
  sitters: ListSitters_sitters[];
}
