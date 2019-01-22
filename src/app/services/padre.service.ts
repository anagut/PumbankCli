import { Injectable } from '@angular/core';
import { Hijo } from '../models/Hijo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddHijoComponent } from '../padre/add-hijo/add-hijo.component';


@Injectable({
  providedIn: 'root'
})
export class PadreService {

  API_URL: "http://localhost:8080/Pumbank/api/padre"

  constructor(private _http:HttpClient) { }

  getHijosFromAPI():Observable<Hijo[]>{
    return this._http.get<Hijo[]>(this.API_URL);

//   addHijo(nuevoH: Hijo):Boolean{
//     nuevoH.hid = (new Number());
//     this._http.put(nuevoH);
//     return true;

//   }

//   addHijoAPI(nuevoHijo:Hijo):Observable<Hijo>{
//     const options={
//       headers:{
//         "Content-Type":"application/json"
//       }
//     };

//     const hijoAEnviar={
//       hid:0,
//       nombre: nuevoHijo.nombre,
      
//     }

//     return this._http.post<Pedido>(this.API_URL,pedidoAEnviar,options);
//   }
// }
