/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: ListFerrets
// ====================================================

export interface ListFerrets_ferrets {
  __typename: "Ferret";
  id: string;
  ageMonths: number;
  ageYears: number;
  bio: string | null;
  fee: string;
  gender: Gender;
  image: string | null;
  name: string;
}

export interface ListFerrets {
  ferrets: ListFerrets_ferrets[];
}

export interface ListFerretsVariables {
  foster: boolean;
}
