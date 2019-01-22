import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://192.168.101.172:8080/PedidosREST/api/authenticate';

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const options = {
      headers: {
        username: username,
        password: password
      }
    };

    return this._http.get<any>(this.API_URL, options);
  }


}
