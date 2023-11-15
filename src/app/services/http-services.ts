import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export type verbs = 'PUT' | 'POST' | 'GET' | 'DELETE' | 'PATCH';

@Injectable({ providedIn: 'root' })
export class HttpService {
  readonly #baseApi: string = environment.BASE_API;
  constructor(private _http: HttpClient) {}

  get(url: string, relative: boolean = true) {
    return this.request('GET', url, null, relative);
  }

  post<T = any>(url: string, params: T, relative: boolean = true) {
    return this.request('POST', url, params, relative);
  }

  request<T = any>(
    type: verbs,
    url: string,
    params?: T,
    relative: boolean = true
  ) {
    if (relative) {
      url = `${this.#baseApi}/${url}`;
    }
    switch (type) {
      case 'PUT':
        return this._http.put<T>(url, params);
      case 'POST':
        return this._http.post<T>(url, params);
      case 'GET':
        return this._http.get<T>(url);
      case 'DELETE':
        return this._http.delete<T>(url, params);
      case 'PATCH':
        return this._http.patch<T>(url, params);
      default:
        return this._http.get<T>(url);
    }
  }
}