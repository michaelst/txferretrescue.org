/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: GetFerret
// ====================================================

export interface GetFerret_ferret {
  __typename: "Ferret";
  id: string;
  ageMonths: number;
  ageYears: number;
  available: boolean;
  bio: string | null;
  fee: string;
  foster: boolean;
  gender: Gender;
  image: string | null;
  name: string;
}

export interface GetFerret {
  ferret: GetFerret_ferret;
}

export interface GetFerretVariables {
  id: string;
}
