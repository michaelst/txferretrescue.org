/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_messages {
  __typename: "Message";
  id: string;
  message: string;
  sentAt: string;
}

export interface SendMessage_sendMessage {
  __typename: "Application";
  id: string;
  messages: SendMessage_sendMessage_messages[];
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage;
}

export interface SendMessageVariables {
  id: string;
  message: string;
}
