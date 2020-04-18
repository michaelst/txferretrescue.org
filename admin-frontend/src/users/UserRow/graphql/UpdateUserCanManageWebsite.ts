/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserCanManageWebsite
// ====================================================

export interface UpdateUserCanManageWebsite_updateUser {
  __typename: "User";
  id: string;
  canManageWebsite: boolean;
}

export interface UpdateUserCanManageWebsite {
  updateUser: UpdateUserCanManageWebsite_updateUser;
}

export interface UpdateUserCanManageWebsiteVariables {
  id: string;
  canManageWebsite: boolean;
}
