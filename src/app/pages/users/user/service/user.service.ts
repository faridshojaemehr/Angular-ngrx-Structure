import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http-services';

@Injectable()
export class UserService {
  constructor(private _http: HttpService) {}

  load() {
    return this._http.get('users');
  }

  delete(userId: number) {
    return this._http.delete('users', { userId });
  }
}
