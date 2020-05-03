/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateApplicationReviewed
// ====================================================

export interface UpdateApplicationReviewed_updateApplication {
  __typename: "Application";
  id: string;
  reviewed: boolean;
}

export interface UpdateApplicationReviewed {
  updateApplication: UpdateApplicationReviewed_updateApplication;
}

export interface UpdateApplicationReviewedVariables {
  id: string;
  reviewed: boolean;
}
