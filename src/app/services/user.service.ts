import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios: User[] = [
    new User(1, 'Pepe', 'p@p.es', 23),
    new User(2, 'Juana', 'j@p.es', 33),
    new User(3, 'Rita', 'r@p.es', 43),
    new User(4, 'Luis', 'l@p.es', 53)
  ];

  constructor() { }

  getUsuarios(): User[] {
    return this._usuarios;
  }

  addUser(nuevoU: User): boolean {
    nuevoU.uid = (new Date()).getTime();
    this._usuarios.push(nuevoU);
    return true;
  }


}
