import { Injectable } from '@angular/core';
import { Paga } from '../models/Paga';
import { Hijo } from '../models/Hijo';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagaService {

  API_URL_PAGAS: 'http://localhost:8080/Pumbank/api/pagas';
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

  addPagaToAPI(paga:Paga):Observable<any>{
    const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
    };
    console.log('Paga',paga);

    return this._http.post(`${this.API_URL}/${paga.pid}/${paga.hid}/paga`, paga, httpOptions).pipe(
      tap(data => this._pagas = [...this._pagas, paga]),
      catchError(this.handleError)
    )
  }

  private handleError(error) {
		console.error('handleError:',error);
		return throwError(error || 'Server error');
	}


}
