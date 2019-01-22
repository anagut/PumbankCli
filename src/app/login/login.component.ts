import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { email:'juan@gmail.com', pass:'md5_coded'};

  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  acceder() {
    console.log(this.user);
    this._auth.login(this.user.email, this.user.pass).subscribe(respuesta => {
      console.log(respuesta);
      localStorage.setItem('token',respuesta.message);
      this._router.navigate(['/b']);
    });
  }

}
