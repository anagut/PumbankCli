import { Component, OnInit } from '@angular/core';
import { Hijo } from '../models/Hijo';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  // hijos:Hijo[] = [
  //   new Hijo(1, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),
  //   new Hijo(2, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),];
  // valor:string='';

  // constructor(private _hijoService:HijoService) { }

  ngOnInit() {
  //   this.hijos=this._hijoService;
  // }

  // filtraPorNombre(){
  //   if(this.usuarios){
  //     return this.usuarios.filter(unU=>{
  //       return (unU.nombre.indexOf(this.valor)>=0);
  //     });
  //   }else{
  //     return this.usuarios;
  //   }
  // }


}
}
