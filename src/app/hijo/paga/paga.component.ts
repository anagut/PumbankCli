import { Component, OnInit } from '@angular/core';
import { PagaService } from 'src/app/services/paga.service';
import { ActivatedRoute } from '@angular/router';
import { Hijo } from 'src/app/models/Hijo';
import { Paga } from 'src/app/models/Paga';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-paga',
  templateUrl: './paga.component.html',
  styleUrls: ['./paga.component.scss']
})
export class PagaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _PagaService: PagaService) { }
  
  form: FormGroup;

  _hijo: Hijo;
  _paga: Paga = new Paga (null, null, null, null, null);


  pid: number = 1;
  hid: number = 1;

  ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     console.log('params',params);
  //     this.hid = params['hid'];
  //     this.pid = params['pid'];
  // });

   this._paga = this._PagaService.getPagaByHid(this.hid);

   this._hijo = this._PagaService.getHijoByHid(this.hid);

console.log(this._paga);
 


}

}
