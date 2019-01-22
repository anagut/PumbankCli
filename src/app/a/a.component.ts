import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  usuarios:User[] = null;
  valor:string='';

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.usuarios=this._userService.getUsuarios();
  }

  filtraPorNombre(){
    if(this.usuarios){
      return this.usuarios.filter(unU=>{
        return (unU.nombre.indexOf(this.valor)>=0);
      });
    }else{
      return this.usuarios;
    }
  }

}
