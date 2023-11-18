import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http-services';
import {IUser} from "../model/user.interface";

@Injectable()
export class UserService {
  constructor(private _http: HttpService) {}

  load() {
    return this._http.get('users');
  }

  delete(userId: number) {
    return this._http.delete(`users/${userId}`);
  }


  update(user:IUser){
    return this._http.put(`users/${user.id}`, user)
  }
}
