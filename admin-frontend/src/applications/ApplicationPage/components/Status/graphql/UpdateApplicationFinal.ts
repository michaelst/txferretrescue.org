/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateApplicationFinal
// ====================================================

export interface UpdateApplicationFinal_updateApplication {
  __typename: "Application";
  id: string;
  final: boolean;
}

export interface UpdateApplicationFinal {
  updateApplication: UpdateApplicationFinal_updateApplication;
}

export interface UpdateApplicationFinalVariables {
  id: string;
  final: boolean;
}
