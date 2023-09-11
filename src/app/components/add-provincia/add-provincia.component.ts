import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/models/entity';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent {

  provincia:Provincia = {

    nombre:'',
    activo:''
  }

  constructor(

    private _provinciaService:ProvinciaService,
    private _router:Router

  ){}



add():void{

  this.provincia.nombre = this.provincia.nombre.toUpperCase();
  this.provincia.activo = 1;

  this._provinciaService.addProvincia(this.provincia).subscribe({

    next:(datos)=>{console.log(datos)}
    ,
    error:(error)=>{this._router.navigate(["/error"])}
    ,
    complete:()=>{this._router.navigate(["/list-provincia"])}

  });

}


}
