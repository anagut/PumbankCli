import { Injectable } from '@angular/core';
import { Paga } from '../models/Paga';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagaService {

  API_URL: 'http://localhost:8080/Pumbank/api/padre/1/hijos/1/paga'

  constructor() { }
}
