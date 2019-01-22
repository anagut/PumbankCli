import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { PedidoService } from '../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedido[] = null;

  constructor(private _pedidosService: PedidoService, private _router:Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      //this.pedidos=this._pedidosService.getPedidos();
      this._pedidosService.getPedidosFromAPI().subscribe(losPedidosRecibidos => {
        this.pedidos = losPedidosRecibidos;
      });

    }else{
      this._router.navigate(['/login']);
    }

  }

}
