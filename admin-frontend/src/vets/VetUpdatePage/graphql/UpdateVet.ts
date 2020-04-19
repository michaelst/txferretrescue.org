/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateVet
// ====================================================

export interface UpdateVet_updateVet {
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

export interface UpdateVet {
  updateVet: UpdateVet_updateVet;
}

export interface UpdateVetVariables {
  id: string;
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
