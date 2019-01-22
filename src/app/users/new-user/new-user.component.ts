import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  nuevoUsuario: User = new User(0, '', '', 0);

  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  addUser(){
    console.log(this.nuevoUsuario);
    this._userService.addUser(this.nuevoUsuario);
  }

}
