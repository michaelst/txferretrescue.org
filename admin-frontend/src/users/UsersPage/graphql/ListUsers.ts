/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUsers
// ====================================================

export interface ListUsers_users {
  __typename: "User";
  id: string;
  email: string;
  canManageApplications: boolean;
  canManageUsers: boolean;
  canManageFerrets: boolean;
  canManageWebsite: boolean;
}

export interface ListUsers {
  users: ListUsers_users[];
}
