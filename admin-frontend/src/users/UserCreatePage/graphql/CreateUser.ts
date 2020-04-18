/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser {
  __typename: "User";
  id: string;
  email: string;
  canManageApplications: boolean;
  canManageUsers: boolean;
  canManageFerrets: boolean;
  canManageWebsite: boolean;
}

export interface CreateUser {
  createUser: CreateUser_createUser;
}

export interface CreateUserVariables {
  email: string;
}
