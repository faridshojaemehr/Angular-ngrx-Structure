import { IUser } from '../../pages/users/user/model/user.interface';
import { UserActions, UserActionsType } from './user.actions';
import { Appstate } from '../index';
import { createSelector } from '@ngrx/store';

export interface UserState {
  users: IUser[];
  selectedUser: IUser | null;
  total: number | null;
}

const initUserState: UserState = {
  users: [
    { id: 1, name: 'farid', email: 'farid@f.com' },
    { id: 2, name: 'juve', email: 'fs@f.com' },
  ],
  selectedUser: null,
  total: 1,
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
