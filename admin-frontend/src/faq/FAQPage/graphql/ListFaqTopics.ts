/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListFaqTopics
// ====================================================

export interface ListFaqTopics_faqTopics {
  __typename: "FaqTopic";
  id: string;
  name: string;
  rank: number;
}

export interface ListFaqTopics {
  faqTopics: ListFaqTopics_faqTopics[];
}
