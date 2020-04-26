/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateFerret
// ====================================================

export interface UpdateFerret_updateFerret {
  __typename: "Ferret";
  id: string;
  ageMonths: number;
  ageYears: number;
  available: boolean;
  bio: string | null;
  fee: string;
  foster: boolean;
  gender: Gender;
  imageUrl: string | null;
  name: string;
}

export interface UpdateFerret {
  updateFerret: UpdateFerret_updateFerret;
}

export interface UpdateFerretVariables {
  id: string;
  name: string;
  ageYears: number;
  ageMonths: number;
  fee: string;
  bio?: string | null;
  gender: Gender;
  available: boolean;
  foster: boolean;
  imageUrl?: string | null;
}
