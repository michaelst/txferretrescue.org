/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserCanManageUsers
// ====================================================

export interface UpdateUserCanManageUsers_updateUser {
  __typename: "User";
  id: string;
  canManageUsers: boolean;
}

export interface UpdateUserCanManageUsers {
  updateUser: UpdateUserCanManageUsers_updateUser;
}

export interface UpdateUserCanManageUsersVariables {
  id: string;
  canManageUsers: boolean;
}
