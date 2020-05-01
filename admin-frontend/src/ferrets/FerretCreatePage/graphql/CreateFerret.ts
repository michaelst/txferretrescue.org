/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: CreateFerret
// ====================================================

export interface CreateFerret_createFerret {
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

export interface CreateFerret {
  createFerret: CreateFerret_createFerret;
}

export interface CreateFerretVariables {
  name: string;
  ageYears: number;
  ageMonths: number;
  fee: string;
  bio?: string | null;
  gender: Gender;
  available: boolean;
  foster: boolean;
  imageUpload?: any | null;
}
