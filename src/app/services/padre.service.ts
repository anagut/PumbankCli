import { Injectable } from '@angular/core';
import { Hijo } from '../models/Hijo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddHijoComponent } from '../padre/add-hijo/add-hijo.component';
import { tap, catchError } from 'rxjs/operators';
import { Padre } from '../models/Padre';


@Injectable({
  providedIn: 'root'
})

export class PadreService {

  private _hijos = [
    new Hijo(1, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),
    new Hijo(2, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),];

  API_URL = "http://ec2-34-243-169-174.eu-west-1.compute.amazonaws.com:8080/Pumbank/api/padre";

  constructor(private _http: HttpClient) { }

  // getHijos(): Hijo[] {
  //   return this._hijos;
  // }

  getHijosByPidFromAPI(pid: number): Observable<Hijo[]> {
    console.log('Padre con pid:', pid);
    return this._http.get<Hijo[]>(`${this.API_URL}/${pid}`);
  }

  //   addHijo(nuevoH: Hijo):Boolean{
  //     nuevoH.hid = (new Number());
  //     this._http.put(nuevoH);
  //     return true;

  //   
}
