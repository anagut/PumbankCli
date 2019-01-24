import { Component, OnInit } from '@angular/core';
import { PagaService } from 'src/app/services/paga.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hijo } from 'src/app/models/Hijo';
import { Paga } from 'src/app/models/Paga';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-paga',
  templateUrl: './paga.component.html',
  styleUrls: ['./paga.component.scss']
})
export class PagaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _PagaService: PagaService, private _router: Router) { }

  form_pagaexistente: FormGroup;
  form_nuevapaga: FormGroup;

  _hijo: Hijo = new Hijo(0, '', '', '', 0, '', '');
  _paga: Paga = new Paga(0, 0, 0, 0, 0);


  pid: number = 1;
  hid: number = 3;

  serverError: string;

  ngOnInit() {
    //   this.route.params.subscribe(params => {
    //     console.log('params',params);
    //     this.hid = params['hid'];
    //     this.pid = params['pid'];
    // });

    if (this._PagaService.getPagaByHid(this.hid) != null) {
      this._paga = this._PagaService.getPagaByHid(this.hid)
    } else {
      this._paga.pid = this.pid;
      this._paga.hid = this.hid;
    }

    this._hijo = this._PagaService.getHijoByHid(this.hid);

    console.log(this._paga);
  }

  onSubmit(form_nuevapaga: NgForm) {
    console.log('Formulario:', form_nuevapaga);
    if (!form_nuevapaga.valid) {
      return;
    } else {
      this._PagaService.addPagaToAPI(this._paga).subscribe(
        data => {
          this._router.navigate(['padre/:pid/:hid']);
        },
        error => {
          this.serverError = 'Ooops ha habido un error...por favor inténtalo nuevamente';
        }
      )
    }
  }

}
