import { Component, OnInit } from '@angular/core';
import { Hijo } from '../models/Hijo';
import { Padre } from '../models/Padre';
import { PadreService } from '../services/padre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})

export class PadreComponent implements OnInit {
  _hijos: Hijo[];
  _padre: Padre[];
  pid: number = 0;

  constructor(private route: ActivatedRoute, private _padreService: PadreService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.pid = params['pid'];

      this._padreService.getHijosByPidFromAPI(this.pid).subscribe(padreApi => {
        console.log('padreApi:', padreApi);
        this._hijos = padreApi.hijos;
      });
    });
  }

}
