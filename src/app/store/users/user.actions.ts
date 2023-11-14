import { Action } from '@ngrx/store';
import { IUser } from 'src/app/pages/users/user/model/user.interface';

export enum UserActionsType {
  LoadUsers = '[USERS] load users trigger',
  LoadUsersDone = '[USERS] load users done',
  LoadUsersFailed = '[USERS] load users error',
  SelectUser = '[USERS] select user',
}

export class LoadUsers implements Action {
  readonly type = UserActionsType.LoadUsers;
  constructor(public payload: any) {}
}

export class SelectUser implements Action {
  readonly type = UserActionsType.SelectUser;
  constructor(public payload: IUser | null) {}
}

export type UserActions = LoadUsers | SelectUser;
