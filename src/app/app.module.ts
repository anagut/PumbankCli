import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MiheaderComponent } from './miheader/miheader.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { NewPedidoComponent } from './pedido/new-pedido/new-pedido.component';
import { LoginComponent } from './login/login.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PagaComponent } from './paga/paga.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { CongelarComponent } from './congelar/congelar.component';
import { AddHijoComponent } from './padre/add-hijo/add-hijo.component';
import { DetalleHijoComponent } from './padre/detalle-hijo/detalle-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    MiheaderComponent,
    NewUserComponent,
    NewPedidoComponent,
    LoginComponent,
    PadreComponent,
    HijoComponent,
    PagaComponent,
    TransferenciaComponent,
    CongelarComponent,
    AddHijoComponent,
    DetalleHijoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }