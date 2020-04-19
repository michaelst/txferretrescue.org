/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVet
// ====================================================

export interface GetVet_vet {
  __typename: "Vet";
  id: string;
  city: string | null;
  companyName: string | null;
  notes: string | null;
  phone: string | null;
  state: string | null;
  street: string | null;
  vetName: string | null;
  website: string | null;
  zip: string | null;
}

export interface GetVet {
  vet: GetVet_vet;
}

export interface GetVetVariables {
  id: string;
}
