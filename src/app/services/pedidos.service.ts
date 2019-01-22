import { Injectable } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API_URL='http://192.168.101.172:8080/PedidosREST/api/pedidos';

  private _pedidos: Pedido[] = [
    new Pedido(1, 'Producto 1', 23),
    new Pedido(2, 'Producto 2', 45),
    new Pedido(3, 'Producto 3', 89),
  ];

  constructor(private _http:HttpClient) { }

  getPedidos(): Pedido[] {
    return this._pedidos;
  }

  getPedidosFromAPI():Observable<Pedido[]>{
    return this._http.get<Pedido[]>(this.API_URL);
  }

  addPedido(nuevoP: Pedido): boolean {
    nuevoP.pid = (new Date()).getTime();
    this._pedidos.push(nuevoP);
    return true;
  }

  addPedidoAPI(nuevoPed:Pedido):Observable<Pedido>{
    const options={
      headers:{
        "Content-Type":"application/json"
      }
    };

    const pedidoAEnviar={
      pid:0,
      descripcion: nuevoPed.descripcion,
      monto: nuevoPed.monto
    }

    return this._http.post<Pedido>(this.API_URL,pedidoAEnviar,options);
  }


}
