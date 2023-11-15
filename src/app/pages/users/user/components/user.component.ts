import { Component } from '@angular/core';
import { LoadUsers, SelectUser } from '../../../../store/users/user.actions';
import { select, Store } from '@ngrx/store';
import { Appstate } from '../../../../store';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.interface';
import {
  seclectUsers,
  seclectUsersTotal,
  seclectedUser,
} from '../../../../store/users/user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user$: Observable<IUser[]>;
  total$: Observable<number>;
  selectUser$: Observable<IUser>;
  constructor(private _store: Store<Appstate>) {
    this._store.dispatch(new LoadUsers({}));
    this.user$ = this._store.pipe(select(seclectUsers));
    this.total$ = this._store.pipe(select(seclectUsersTotal));
    this.selectUser$ = this._store.pipe(select(seclectedUser));
  }

  public selectUser = (user: IUser) => {
    this._store.dispatch(new SelectUser(user));
  };

  public deSelectUser() {
    this._store.dispatch(new SelectUser(null));
  }
}
