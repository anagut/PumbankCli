import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Congelar } from 'src/app/models/Congelar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-congelar',
  templateUrl: './congelar.component.html',
  styleUrls: ['./congelar.component.scss']
})
export class CongelarComponent implements OnInit {
  private nuevoCongelar: Congelar = new Congelar(0, '00/00/0000', '00/00/0000', 0, 0);

  constructor(private route: ActivatedRoute, private _congelarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cid = params['cid'];
      this._congelarService.getCongelarFromAPI(cid).subscribe(Congelado => {
        this.nuevoCongelar = Congelado;
      });
    });
  }

  addCongelar() {
    this._congelarService.addCongelarAPI(this.nuevoCongelar).subscribe(congelarRec => {
      this.nuevoCongelar = congelarRec;
    });
  }
  
}
// @Component({
//   selector: 'app-new-pedido',
//   templateUrl: './new-pedido.component.html',
//   styleUrls: ['./new-pedido.component.scss']
// })
// export class NewPedidoComponent implements OnInit {

//   nuevoPedido:Pedido =new Pedido(0,'',0);

//   constructor(private _pedidoService:PedidoService) { }

//   ngOnInit() {
//   }

//   addPedido(){
//     console.log(this.nuevoPedido);
//     //this._pedidoService.addPedido(this.nuevoPedido);
//     this._pedidoService.addPedidoAPI(this.nuevoPedido).subscribe(pedidoRec => {
//       this.nuevoPedido=pedidoRec;
//     });
//   }

// }
