/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser {
  __typename: "User";
  id: string;
  canManageApplications: boolean;
  canManageUsers: boolean;
  canManageFerrets: boolean;
  canManageWebsite: boolean;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  id: string;
  canManageApplications: boolean;
  canManageUsers: boolean;
  canManageFerrets: boolean;
  canManageWebsite: boolean;
}
