/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateFaqContent
// ====================================================

export interface CreateFaqContent_createFaqContent {
  __typename: "FaqContent";
  id: string;
  title: string;
  rank: number;
}

export interface CreateFaqContent {
  createFaqContent: CreateFaqContent_createFaqContent;
}

export interface CreateFaqContentVariables {
  topicId: string;
  title: string;
  rank: number;
  content: string;
}
