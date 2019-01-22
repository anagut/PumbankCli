import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { NewPedidoComponent } from './pedido/new-pedido/new-pedido.component';
import { LoginComponent } from './login/login.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PagaComponent } from './hijo/paga/paga.component';
import { TransferenciaComponent } from './hijo/transferencia/transferencia.component';



const routes: Routes = [
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"a", component:AComponent, pathMatch:"full"},
  {path:"a/new", component:NewUserComponent, pathMatch:"full"},
  {path:"b", component:BComponent, pathMatch:"full"},
  {path:"b/new", component:NewPedidoComponent, pathMatch:"full"},
  {path:"", redirectTo:"a", pathMatch:"full"},

  {path:"padre", component:PadreComponent, pathMatch:"full"},
  {path:"padre/:hid", component:HijoComponent, pathMatch:"full"},
  {path:"padre/:hid/paga", component:PagaComponent, pathMatch:"full"},
  {path:"padre/:hid/transferencia", component:TransferenciaComponent, pathMatch:"full"},
  {path:"padre/:hid/congelar", component:TransferenciaComponent, pathMatch:"full"},

  {path:"paga", component:PagaComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
