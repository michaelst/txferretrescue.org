/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFaqTopic
// ====================================================

export interface GetFaqTopic_faqTopic_questions {
  __typename: "FaqContent";
  id: string;
  title: string;
  rank: number;
}

export interface GetFaqTopic_faqTopic {
  __typename: "FaqTopic";
  id: string;
  name: string;
  rank: number;
  questions: GetFaqTopic_faqTopic_questions[];
}

export interface GetFaqTopic {
  faqTopic: GetFaqTopic_faqTopic;
}

export interface GetFaqTopicVariables {
  id: string;
}
