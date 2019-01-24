import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hijo } from '../models/Hijo';
import { Observable } from 'rxjs';
import { Padre } from '../models/Padre';


@Injectable({
  providedIn: 'root'
})
export class AddHijoService {

  API_URL = "http://ec2-34-243-169-174.eu-west-1.compute.amazonaws.com:8080/Pumbank/api/padre";

  _hijos: Hijo[];

  constructor(private _http: HttpClient) { }


  addHijo(): boolean {
    return true;
  }

  addHijoToAPI(nuevoH: Hijo): Observable<Hijo> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const hijoAEnviar = {
      hid: 0,
      nombre: nuevoH.nombre,
      apellidos: nuevoH.apellidos,
      fechanacimiento: nuevoH.fechanacimiento,
      saldo: nuevoH.saldo,
      email: nuevoH.email,
      password: nuevoH.password,
    }

    return this._http.post<Hijo>(this.API_URL, hijoAEnviar, options);

  }

}

