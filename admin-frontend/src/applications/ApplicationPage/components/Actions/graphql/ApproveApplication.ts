/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ApproveApplication
// ====================================================

export interface ApproveApplication_approveApplication {
  __typename: "Application";
  id: string;
  approved: boolean;
  reviewed: boolean;
  final: boolean;
}

export interface ApproveApplication {
  approveApplication: ApproveApplication_approveApplication;
}

export interface ApproveApplicationVariables {
  id: string;
}
