/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateFaqTopic
// ====================================================

export interface CreateFaqTopic_createFaqTopic {
  __typename: "FaqTopic";
  id: string;
  name: string;
  rank: number;
}

export interface CreateFaqTopic {
  createFaqTopic: CreateFaqTopic_createFaqTopic;
}

export interface CreateFaqTopicVariables {
  name: string;
  rank: number;
}
