import { Injectable } from '@angular/core';
import { Congelar } from '../models/Congelar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongelarService {

  API_URL='http://localhost:8080/Pumbank/api/padre';

  private _congelar: Congelar[] = [
    new Congelar (1, '01/12/2019', '18/01/2020', 1,1),
    new Congelar (2, '05/12/2019', '20/01/2020', 1,2)
  ];

  constructor(private _http:HttpClient) { }

  // getCongelar(): Congelar[] {
  //   return this._congelar;
  // }

  // getCongelarByHid(hid:number):Congelar {
  //   return (this._congelar.filter(congelado => congelado.hid == hid)[0]);
  // }

  getCongelarFromAPI(pid, hid):Observable<Congelar>{
    return this._http.get<Congelar>(`${this.API_URL}/${pid}/hijos/${hid}/congelar/1`);
  }

  // addCongelar(nuevoCong: Congelar): boolean {
  //   nuevoCong.cid = (new Date()).getTime();
  //   this._congelar.push(nuevoCong);
  //   return true;
  // }

  addCongelarAPI(nuevoCong:Congelar):Observable<Congelar>{
    const options={
      headers:{
        "Content-Type":"application/json"
      }
    };

    const CongelarAEnviar={
      cid:0,
      fechainicio: nuevoCong.fechainicio,
      fechafin: nuevoCong.fechafin,
      pid:0,
      hid:0,
    }

    return this._http.post<Congelar>(this.API_URL,CongelarAEnviar,options);
  }



}