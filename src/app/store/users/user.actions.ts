import { HttpErrorResponse } from '@angular/common/http';
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
export class LoadUsersDone implements Action {
  readonly type = UserActionsType.LoadUsersDone;
  constructor(public payload: IUser[]) {}
}

export class LoadUsersFailed implements Action {
  readonly type = UserActionsType.LoadUsersFailed;
  constructor(public payload: HttpErrorResponse) {}
}

export type UserActions = LoadUsers | SelectUser;
