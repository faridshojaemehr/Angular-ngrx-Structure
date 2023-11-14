import {ActionReducerMap} from "@ngrx/store";
import * as fromUsers from './users/user.reducer'
export interface Appstate {
  users: fromUsers.UserState
}


export const redusers: ActionReducerMap<Appstate> = {
  users : fromUsers.usersReducer,
}
