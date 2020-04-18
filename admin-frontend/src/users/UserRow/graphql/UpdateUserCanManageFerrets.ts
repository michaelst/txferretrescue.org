/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserCanManageFerrets
// ====================================================

export interface UpdateUserCanManageFerrets_updateUser {
  __typename: "User";
  id: string;
  canManageFerrets: boolean;
}

export interface UpdateUserCanManageFerrets {
  updateUser: UpdateUserCanManageFerrets_updateUser;
}

export interface UpdateUserCanManageFerretsVariables {
  id: string;
  canManageFerrets: boolean;
}
