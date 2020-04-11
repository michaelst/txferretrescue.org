/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateApplication
// ====================================================

export interface CreateApplication_createApplication {
  __typename: "Application";
  id: string;
}

export interface CreateApplication {
  createApplication: CreateApplication_createApplication;
}

export interface CreateApplicationVariables {
  age: number;
  cageInfo: string;
  city: string;
  diseasesInfo: string;
  eatInfo: string;
  email: string;
  foreverHome: string;
  fostering: boolean;
  heartwormPrevent: string;
  heartworms: boolean;
  heartwormTreat: boolean;
  homeType: string;
  keptInfo: string;
  landlordInfo?: string | null;
  legalToOwn: boolean;
  moveInfo: string;
  name: string;
  notes?: string | null;
  numFerretsInfo: string;
  otherAnimals: string;
  ownedBefore: boolean;
  ownedDetails?: string | null;
  ownHome: boolean;
  peopleAtAddress: string;
  phonePrimary: string;
  phoneSecondary?: string | null;
  playInfo: string;
  proofingInfo: string;
  smoker: boolean;
  state: string;
  street: string;
  surrendered: boolean;
  surrenderedDetails?: string | null;
  timeAtAddress: string;
  toyInfo: string;
  vaccinesCurrent: boolean;
  vetInfo: string;
  zipCode: number;
}
