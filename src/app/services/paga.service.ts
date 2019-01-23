import { Injectable } from '@angular/core';
import { Paga } from '../models/Paga';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hijo } from '../models/Hijo';

@Injectable({
  providedIn: 'root'
})
export class PagaService {

  API_URL: 'http://localhost:8080/Pumbank/api/pagas'

  // private _pagas : Paga[];

  private _pagas: Paga[] = [
    new Paga (1, 10, 7, 1, 1),
    new Paga (2, 20, 15, 1, 2)

  ]

  private _hijos: Hijo[] = [
    new Hijo (1, "Pepe", "Pérez", "10-10-10", 50, "p@p.es", "ppp"),
    new Hijo (2, "Pepa", "Pérez", "12-12-12", 20, "pe@p.es", "pepep"),
    new Hijo (3, "María", "Pérez", "12-12-12", 20, "ma@p.es", "mmm"),
  ]

   constructor(private _http: HttpClient) { }

  getListaPagas(){
    return this._pagas;
  }

  getHijoByHid(hid:number):Hijo{
    return (this._hijos.filter(hijo => hijo.hid == hid)[0]);
  }

  getPagaByHid(hidbusc: Number):Paga{
    return(this._pagas.filter(paga => paga.hid == hidbusc)[0]);
  }

}
