/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListVets
// ====================================================

export interface ListVets_vets {
  __typename: "Vet";
  id: string;
  companyName: string | null;
  vetName: string | null;
}

export interface ListVets {
  vets: ListVets_vets[];
}
