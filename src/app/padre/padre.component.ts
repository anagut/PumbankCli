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

  _hijos: Hijo[];
  pid: number = 0;

  constructor(private route: ActivatedRoute, private _padreService: PadreService) { }

  // ngOnInit() {
  //   this._hijos = this._padreService.getHijos();
  //   this.route.params.subscribe(params => {
  //     console.log('params', params);
  //     this.pid = params['pid'];
  //   });
  // }

  ngOnInit() {
    this._padreService.getHijosByPidFromAPI(1).subscribe(hijosApi => {
      console.log('hijosApi:',hijosApi);
      this._hijos=hijosApi.hijos;
    });
  }

}
