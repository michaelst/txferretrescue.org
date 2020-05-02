/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: ListApplications
// ====================================================

export interface ListApplications_applications {
  __typename: "Application";
  id: string;
  name: string;
  email: string;
  reviewed: boolean;
  approved: boolean;
  final: boolean;
}

export interface ListApplications {
  applications: ListApplications_applications[];
}

export interface ListApplicationsVariables {
  page: number;
  status: ApplicationStatus;
  search?: string | null;
}
