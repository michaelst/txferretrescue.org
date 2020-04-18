/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserCanManageApplications
// ====================================================

export interface UpdateUserCanManageApplications_updateUser {
  __typename: "User";
  id: string;
  canManageApplications: boolean;
}

export interface UpdateUserCanManageApplications {
  updateUser: UpdateUserCanManageApplications_updateUser;
}

export interface UpdateUserCanManageApplicationsVariables {
  id: string;
  canManageApplications: boolean;
}
