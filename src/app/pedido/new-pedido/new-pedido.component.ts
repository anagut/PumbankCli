import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { PedidoService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-new-pedido',
  templateUrl: './new-pedido.component.html',
  styleUrls: ['./new-pedido.component.scss']
})
export class NewPedidoComponent implements OnInit {

  nuevoPedido:Pedido =new Pedido(0,'',0);

  constructor(private _pedidoService:PedidoService) { }

  ngOnInit() {
  }

  addPedido(){
    console.log(this.nuevoPedido);
    //this._pedidoService.addPedido(this.nuevoPedido);
    this._pedidoService.addPedidoAPI(this.nuevoPedido).subscribe(pedidoRec => {
      this.nuevoPedido=pedidoRec;
    });
  }

}
