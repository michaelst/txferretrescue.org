/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateFaqContent
// ====================================================

export interface UpdateFaqContent_updateFaqContent {
  __typename: "FaqContent";
  id: string;
  title: string;
  rank: number;
  content: string;
}

export interface UpdateFaqContent {
  updateFaqContent: UpdateFaqContent_updateFaqContent;
}

export interface UpdateFaqContentVariables {
  id: string;
  title: string;
  rank: number;
  content: string;
}
