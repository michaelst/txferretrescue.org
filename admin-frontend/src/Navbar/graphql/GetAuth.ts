/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuth
// ====================================================

export interface GetAuth_user {
  __typename: "User";
  id: string;
  canManageApplications: boolean;
  canManageUsers: boolean;
  canManageFerrets: boolean;
  canManageWebsite: boolean;
}

export interface GetAuth {
  user: GetAuth_user;
}

export interface GetAuthVariables {
  id: string;
}
