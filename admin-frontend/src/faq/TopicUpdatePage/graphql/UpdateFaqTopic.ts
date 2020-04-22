/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateFaqTopic
// ====================================================

export interface UpdateFaqTopic_updateFaqTopic {
  __typename: "FaqTopic";
  id: string;
  name: string;
  rank: number;
}

export interface UpdateFaqTopic {
  updateFaqTopic: UpdateFaqTopic_updateFaqTopic;
}

export interface UpdateFaqTopicVariables {
  id: string;
  name: string;
  rank: number;
}
