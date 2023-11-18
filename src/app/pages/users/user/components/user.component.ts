import { Component } from '@angular/core';
import {
  DeleteUser,
  LoadUsers,
  LoadUsersDone,
  SelectUser,
  UpdateUser,
} from '../../../../store/users/user.actions';
import { select, Store } from '@ngrx/store';
import { Appstate } from '../../../../store';
import { Observable, of } from 'rxjs';
import { IUser } from '../model/user.interface';
import {
  seclectUsers,
  seclectUsersTotal,
  seclectedUser,
} from '../../../../store/users/user.reducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user$: Observable<IUser[]>;
  total$: Observable<number>;
  selectUser$: Observable<IUser>;
  userForm: FormGroup;

  constructor(private _store: Store<Appstate>) {
    this._store.dispatch(new LoadUsers({}));
    this.user$ = this._store.pipe(select(seclectUsers));
    this.total$ = this._store.pipe(select(seclectUsersTotal));
    this.selectUser$ = this._store.pipe(select(seclectedUser));
    this.buildForm();
  }

  public selectUser = (user: IUser) => {
    this._store.dispatch(new SelectUser(user));
    if (user) {
      this.userForm.setValue(user);
    }
  };

  private buildForm() {
    this.userForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
    });
  }

  public delete(userId: number) {
    this._store.dispatch(new DeleteUser(userId));
  }

  public deSeleteUser() {
    this._store.dispatch(new SelectUser(null));
  }

  public editUser(row) {
    this.selectUser(row);
  }

  public updateUser() {
    const user: IUser = this.userForm.value;
    this._store.dispatch(new UpdateUser(user));
    this._store.dispatch(new SelectUser(null))
  }
}
