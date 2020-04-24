/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListTopics
// ====================================================

export interface ListTopics_faqTopics_questions {
  __typename: "FaqContent";
  id: string;
  content: string;
  title: string;
}

export interface ListTopics_faqTopics {
  __typename: "FaqTopic";
  id: string;
  name: string;
  rank: number;
  questions: ListTopics_faqTopics_questions[];
}

export interface ListTopics {
  faqTopics: ListTopics_faqTopics[];
}
