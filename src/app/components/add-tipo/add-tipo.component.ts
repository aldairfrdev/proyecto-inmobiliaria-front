import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tipo } from 'src/app/models/entity';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-add-tipo',
  templateUrl: './add-tipo.component.html',
  styleUrls: ['./add-tipo.component.css']
})
export class AddTipoComponent{

  tipo:Tipo = {

    nombre:'',
    activo:''
  }

  constructor(

    private _tipoService:TipoService,
    private _router:Router

  ){}



add():void{

  this.tipo.nombre = this.tipo.nombre.toUpperCase();
  this.tipo.activo = 1;

  this._tipoService.addTipo(this.tipo).subscribe({

    next:(datos)=>{console.log(datos)}
    ,
    error:(error)=>{this._router.navigate(["/error"])}
    ,
    complete:()=>{this._router.navigate(["/list-tipo"])}

  });

}



}
