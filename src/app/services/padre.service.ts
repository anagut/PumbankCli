import { Injectable } from '@angular/core';
import { Hijo } from '../models/Hijo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddHijoComponent } from '../padre/add-hijo/add-hijo.component';
import { tap, catchError } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class PadreService {

<<<<<<< HEAD
//   API_URL: "http://localhost:8080/Pumbank/api/padre"

//   constructor(private _http:HttpClient) { }

//   getHijosFromAPI():Observable<Hijo[]>{
//     return this._http.get<Hijo[]>(this.API_URL);
=======
  private _hijos = [
    new Hijo(1, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),
    new Hijo(2, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),];

  API_URL= "http://localhost:8080/Pumbank/api/padre";

  constructor(private _http: HttpClient) { }
>>>>>>> 481e32cc6e15f3a121abc5b8fff46545162dbdc1

  // getHijos(): Hijo[] {
  //   return this._hijos;
  // }

  getHijosByPidFromAPI(pid: number): Observable<Hijo[]> {
    return this._http.get<Hijo[]>(`${this.API_URL}/${pid}`);
  }

  //   addHijo(nuevoH: Hijo):Boolean{
  //     nuevoH.hid = (new Number());
  //     this._http.put(nuevoH);
  //     return true;

  //   
}