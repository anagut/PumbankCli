// import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

// import { Congelar } from 'src/app/models/Congelar';

// @Component({
//   selector: 'boton-borrar',
//   templateUrl: './botonborrar.component.html',
// })

// export class BotonBorrarComponent implements OnChanges{
// 	@Input() cid: number;
// 	@Output() borrarClicked: EventEmitter<string> = new EventEmitter<string>();

// 	ngOnChanges(sc:any): void {
//     console.log('ngOnChanges',sc);
//   }

//   borra(cid:string) {
//     console.log('Borrar CID:',cid);
//     this.borrarClicked.emit(cid);
//   }

// }