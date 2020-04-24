/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFaqContent
// ====================================================

export interface GetFaqContent_faqContent {
  __typename: "FaqContent";
  id: string;
  title: string;
  content: string;
  rank: number;
}

export interface GetFaqContent {
  faqContent: GetFaqContent_faqContent;
}

export interface GetFaqContentVariables {
  id: string;
}
