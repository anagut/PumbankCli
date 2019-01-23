// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Congelar } from 'src/app/models/Congelar';
// import { ActivatedRoute } from '@angular/router';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


// @Component({
//   selector: 'app-congelar',
//   templateUrl: './congelar.component.html',
//   styleUrls: ['./congelar.component.scss']
// })
// export class CongelarComponent implements OnInit {
//   private nuevoCongelar: Congelar = new Congelar(0, '00/00/0000', '00/00/0000', 0, 0);

//   constructor(private route: ActivatedRoute, private _congelarService) { 

//   private hid: number = 0;
//   private congelado: Congelar= new Congelar(0,'','',0,0);

//   ngOnInit() {

//     this.route.params.subscribe(params => {
//       this.hid = params['hid'];
//       this.congelado.hid=this._congelarService.getCongelarByHid();
//     });

   

//   }


//       this.route.params.subscribe(params => {
//         let cid = params['cid'];
//         this._congelarService.getCongelarFromAPI(cid).subscribe(Congelado => {
//           this.nuevoCongelar = Congelado;
//         });
//       });
//   }

//   addCongelar() {
//     this._congelarService.addCongelarAPI(this.nuevoCongelar).subscribe(congelarRec => {
//       this.nuevoCongelar = congelarRec;
//     });
//   }

// }
