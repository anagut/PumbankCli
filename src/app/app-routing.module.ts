import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PagaComponent } from './hijo/paga/paga.component';
import { TransferenciaComponent } from './hijo/transferencia/transferencia.component';
import { CongelarComponent } from './hijo/congelar/congelar.component';
import { AddHijoComponent } from './padre/add-hijo/add-hijo.component';



const routes: Routes = [
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"", redirectTo:"a", pathMatch:"full"},

  {path:"padre/:pid", component:PadreComponent, pathMatch:"full"},
  {path:"padre/:pid/:hid", component:HijoComponent, pathMatch:"full"},
  {path:"padre/:pid/add-hijo", component:AddHijoComponent, pathMatch:"full"},
  {path:"padre/:pid/:hid/paga", component:PagaComponent, pathMatch:"full"},
  {path:"padre/:pid/:hid/transferencia", component:TransferenciaComponent, pathMatch:"full"},
  {path:"padre/:pid/:hid/congelar", component:CongelarComponent, pathMatch:"full"},

  {path:"paga", component:PagaComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
