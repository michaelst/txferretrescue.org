/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: ListFerrets
// ====================================================

export interface ListFerrets_ferrets {
  __typename: "Ferret";
  id: string;
  name: string;
  gender: Gender;
  available: boolean;
  foster: boolean;
  fee: string;
}

export interface ListFerrets {
  ferrets: ListFerrets_ferrets[];
}
