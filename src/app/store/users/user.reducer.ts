import { IUser } from '../../pages/users/user/model/user.interface';
import { UserActions, UserActionsType } from './user.actions';
import { Appstate } from '../index';
import { createSelector } from '@ngrx/store';

export interface UserState {
  users: IUser[];
  selectedUser: IUser | null;
  total: number | null;
  recently: {
    updated: IUser | null;
    deleted: IUser | null;
  };
}

const initUserState: UserState = {
  users: [],
  selectedUser: null,
  total: null,
  recently: {
    updated: null,
    deleted: null,
  },
};
export function usersReducer(
  state: UserState = initUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionsType.LoadUsers:
      return state;
    case UserActionsType.SelectUser:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case UserActionsType.LoadUsersDone:
      return {
        ...state,
        users: action.payload,
        total: action.payload?.length,
      };
    default:
      return state;
  }
}

export const seclectUsersSatet = (app: Appstate) => app.users;
export const seclectUsers = createSelector(
  seclectUsersSatet,
  (state) => state.users
);
export const seclectUsersTotal = createSelector(
  seclectUsersSatet,
  (state) => state.total
);
export const seclectedUser = createSelector(
  seclectUsersSatet,
  (state) => state.selectedUser
);
