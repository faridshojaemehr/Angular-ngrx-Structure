import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/pages/users/user/service/user.service';
import {
  DeleteUser,
  DeleteUserDone,
  LoadUsers,
  LoadUsersDone,
  UserActionsType,
} from './user.actions';
import { map, switchMap } from 'rxjs';
import { IUser } from 'src/app/pages/users/user/model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private _service: UserService, private actions$: Actions) {}

  onLoadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionsType.LoadUsers),
      switchMap((action: LoadUsers) =>
        this._service.load().pipe(
          map((res: IUser[]) => {
            return new LoadUsersDone(res);
          })
        )
      )
    )
  );

  onDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionsType.DeleteUser),
      switchMap((action: DeleteUser) =>
        this._service.delete(action.payload).pipe(
          map((res) => {
            return new DeleteUserDone(action.payload);
          })
        )
      )
    )
  );
}
