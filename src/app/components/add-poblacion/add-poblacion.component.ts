import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poblacion } from 'src/app/models/entity';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-add-poblacion',
  templateUrl: './add-poblacion.component.html',
  styleUrls: ['./add-poblacion.component.css']
})
export class AddPoblacionComponent implements OnInit {

  aDatos:any[];
  poblacion:Poblacion = {

    nombre:'',
    provincia:{
      nombre:'',
      activo:''
    },
    activo:''
  }

  constructor(

    private _provinciaService:ProvinciaService,
    private _poblacionService:PoblacionService,
    private _router:Router

  ){}


  ngOnInit(): void {
    this.getDatos();

  }

  getDatos():void{
    //Rellenamos el select provincia con los datos de la BBDD
    this._provinciaService.getProvincias().subscribe({

      next:(datos)=>{this.aDatos=datos}
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{}
  
    });
  

  }



add():void{

  this.poblacion.nombre = this.poblacion.nombre.toUpperCase();
  this.poblacion.activo = 1;


  this._poblacionService.addPoblacion(this.poblacion).subscribe({

    next:(datos)=>{console.log(datos)}
    ,
    error:(error)=>{this._router.navigate(["/error"])}
    ,
    complete:()=>{this._router.navigate(["/list-poblacion"])}

  });

}


}
