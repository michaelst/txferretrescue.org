/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: faqTopic
// ====================================================

export interface faqTopic_questions {
  __typename: "FaqContent";
  id: string;
  title: string;
  rank: number;
}

export interface faqTopic {
  __typename: "FaqTopic";
  questions: faqTopic_questions[];
}
