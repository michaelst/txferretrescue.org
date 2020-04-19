/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateVet
// ====================================================

export interface CreateVet_createVet {
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

export interface CreateVet {
  createVet: CreateVet_createVet;
}

export interface CreateVetVariables {
  city?: string | null;
  companyName?: string | null;
  notes?: string | null;
  phone?: string | null;
  state?: string | null;
  street?: string | null;
  vetName?: string | null;
  website?: string | null;
  zip?: string | null;
}
