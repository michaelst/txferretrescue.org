/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetApplication
// ====================================================

export interface GetApplication_application_messages {
  __typename: "Message";
  id: string;
  message: string;
  sentAt: string;
}

export interface GetApplication_application {
  __typename: "Application";
  id: string;
  age: number;
  approved: boolean;
  cageInfo: string;
  city: string;
  diseasesInfo: string;
  eatInfo: string;
  email: string;
  final: boolean;
  foreverHome: string;
  fostering: boolean;
  heartwormPrevent: string;
  heartwormTreat: boolean;
  heartworms: boolean;
  homeType: string;
  keptInfo: string;
  landlordInfo: string | null;
  legalToOwn: boolean;
  moveInfo: string;
  name: string;
  notes: string | null;
  numFerretsInfo: string;
  otherAnimals: string;
  ownHome: boolean;
  ownedBefore: boolean;
  ownedDetails: string | null;
  peopleAtAddress: string;
  phonePrimary: string;
  phoneSecondary: string | null;
  playInfo: string;
  proofingInfo: string;
  reviewed: boolean;
  smoker: boolean;
  state: string;
  street: string;
  surrenderedDetails: string | null;
  surrendered: boolean;
  timeAtAddress: string | null;
  toyInfo: string;
  vaccinesCurrent: boolean;
  vetInfo: string;
  zipCode: number;
  messages: GetApplication_application_messages[];
}

export interface GetApplication {
  application: GetApplication_application;
}

export interface GetApplicationVariables {
  id: string;
}
