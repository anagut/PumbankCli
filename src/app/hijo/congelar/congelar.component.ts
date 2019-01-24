import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Congelar } from 'src/app/models/Congelar';
import { ActivatedRoute } from '@angular/router';
import { CongelarService } from 'src/app/services/congelar.service';


@Component({
  selector: 'app-congelar',
  templateUrl: './congelar.component.html',
  styleUrls: ['./congelar.component.scss']
})
export class CongelarComponent implements OnInit {
  private _congelar = new Congelar(0, '00/00/0000', '00/00/0000', 0, 0);
  constructor(private route: ActivatedRoute, private _congelarService: CongelarService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let hid = params['hid'];
      let pid = params['pid'];
      this._congelarService.getCongelarFromAPI(pid, hid).subscribe(congelado => {
        this._congelar = congelado;
      });
    });
  }


  //contraseña: Pumbank2019!  username: root-->todo de la RDS

  addCongelar() {
    this._congelarService.addCongelarAPI(this._congelar).subscribe(congelarRec => {
      this._congelar = congelarRec;
    });

  }


}