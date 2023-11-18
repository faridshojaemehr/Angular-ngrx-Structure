import { IUser } from '../../pages/users/user/model/user.interface';
import { UserActions, UserActionsType } from './user.actions';
import { Appstate } from '../index';
import { createSelector } from '@ngrx/store';

export interface UserState {
  users: IUser[];
  selectedUser: IUser | null;
  total: number | null;
  recently: {
    updated: number | null;
    deleted: number | null;
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
    case UserActionsType.DeleteUser:
      return state;

    case UserActionsType.DeleteUserDone:
      const index: number = state.users.findIndex(
        (user) => user.id == action.payload
      );

      return {
        ...state,
        users: [
          ...state.users.slice(0, index),
          ...state.users.slice(index + 1),
        ],
        total: state.total - 1,
        recently: {
          ...state.recently,
          deleted: action.payload,
        },
      };
    case UserActionsType.UpdateUser:
      return state;

    case UserActionsType.UpdateUserDone:
      const updateIndex = state.users.findIndex(user =>user.id== action.payload.id )
      return {
        ...state,
        users: [
          ...state.users.slice(0, updateIndex),
          action.payload,
          ...state.users.slice(updateIndex + 1),
        ],

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
