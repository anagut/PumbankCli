import { Component, OnInit } from '@angular/core';
import { Hijo } from 'src/app/models/Hijo';
import { AddHijoService } from 'src/app/services/add-hijo.service';
@Component({
  selector: 'app-add-hijo',
  templateUrl: './add-hijo.component.html',
  styleUrls: ['./add-hijo.component.scss']
})
export class AddHijoComponent implements OnInit {

  nuevoHijo: Hijo= new Hijo(0,'','','',0,'','')

  constructor(private _addHijoService: AddHijoService) { }

  ngOnInit() {
  }

  addHijo (){
    console.log(this.nuevoHijo);
    this._addHijoService.addHijoToAPI(this.nuevoHijo).subscribe(hijoRec => {
      this.nuevoHijo = hijoRec;
    });
  }

}
