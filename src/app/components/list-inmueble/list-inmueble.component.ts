import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/models/entity';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-list-inmueble',
  templateUrl: './list-inmueble.component.html',
  styleUrls: ['./list-inmueble.component.css']
})
export class ListInmuebleComponent implements OnInit{

  aDatos:Inmueble[];

  constructor(
    private _inmuebleService:InmuebleService,
    private _router:Router

  ){}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(){

    this._inmuebleService.getInmuebles().subscribe({

      next:(datos)=>{

        for(let dato of datos){

          dato.direccionCompleta = `${dato.via} ${dato.nombreVia} ${dato.numero} ${dato.planta} ${dato.puerta}`;
        
        }
        
        
        this.aDatos = datos;
      }
      ,
      error:(error)=>{this._router.navigate(['/error']);}
      ,
      complete:()=>{}

    });

  }

}
