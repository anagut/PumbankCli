import { Component, OnInit } from '@angular/core';
import { Hijo } from '../models/Hijo';
import { PadreService } from '../services/padre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-padre',
   templateUrl: './padre.component.html',
   styleUrls: ['./padre.component.scss']
 })
 export class PadreComponent implements OnInit {

<<<<<<< HEAD
=======
<<<<<<< HEAD
//   hijos:Hijo[] = [
//     new Hijo(1, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),
//     new Hijo(2, "Ricardo Jr", "Rodriguez", "2005-06-17", 105.6, "rjr@r.es", "rrrr"),];
//   valor:string='';

//   constructor(private _hijoService:HijoService) { }

   ngOnInit() {
//     this.hijos=this._hijoService;
//   }

//   filtraPorNombre(){
//     if(this.usuarios){
//       return this.usuarios.filter(unU=>{
//         return (unU.nombre.indexOf(this.valor)>=0);
//       });
//     }else{
//       return this.usuarios;
//     }
   }
=======
<<<<<<< HEAD
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
=======
>>>>>>> 6ac0353eed1ace686aab93fdf57a7a000f9206ce
  _hijos: Hijo[];
  pid: number = 0;
>>>>>>> 481e32cc6e15f3a121abc5b8fff46545162dbdc1

  constructor(private route: ActivatedRoute, private _padreService: PadreService) { }

  // ngOnInit() {
  //   this._hijos = this._padreService.getHijos();
  //   this.route.params.subscribe(params => {
  //     console.log('params', params);
  //     this.pid = params['pid'];
  //   });
  // }

  ngOnInit() {
    this._padreService.getHijosByPidFromAPI(2).subscribe(hijosApi => {
      console.log('hijosApi:',hijosApi);
      this._hijos=hijosApi.hijos;
    });
  }

}
