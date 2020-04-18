/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_currentUser {
  __typename: "User";
  canManageApplications: boolean;
  canManageUsers: boolean;
  canManageFerrets: boolean;
  canManageWebsite: boolean;
}

export interface CurrentUser {
  currentUser: CurrentUser_currentUser;
}
