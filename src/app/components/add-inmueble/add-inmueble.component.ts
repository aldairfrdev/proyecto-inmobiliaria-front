import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/models/entity';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-add-inmueble',
  templateUrl: './add-inmueble.component.html',
  styleUrls: ['./add-inmueble.component.css']
})
export class AddInmuebleComponent implements OnInit{

  ////////////////////////////////////
  nFases:number=2;
  cargaCompletada:boolean=false;
  fasesCargadas:number=0;
  ////////////////////////////////////
  
  aPoblaciones:any[];
  aTipos:any[];

  inmueble:Inmueble = {
    activo: 1,
    apertura: '',
    ascensor: 0,
    cp: '',
    descripcion: '',
    plazasGaraje: 0,
    jardin: 0,
    nbalcones: 0,
    nbanhos: 0,
    nhabitaciones: 0,
    nombreVia: '',
    numero: '',
    orientacion: '',
    amueblado: 0,
    trastero: 0,
    piscina: 0,
    planta: '',
    portada: 0,
    precio: 0,
    puerta: '',
    superficieConstruida: '',
    superficieUtil: '',
    tendedero: 0,
    tipoCalefaccion: '',
    titular: '',
    via: '',
    poblacion: {
      nombre:'',
      provincia:{
        nombre:'',
        activo:''
      },
      activo:''
    },
    tipo: {
      nombre:'',
      activo:''
    }
  }

  constructor(

    private _tipoService:TipoService,
    private _poblacionService:PoblacionService,
    private _inmuebleService:InmuebleService,
    private _router:Router

  ){}


  ngOnInit(): void {
    this.getDatos();

  }

  getDatos():void{
    //Rellenamos el select poblacion con los datos de la BBDD
    this._poblacionService.getPoblaciones().subscribe({

      next:(datos)=>{this.aPoblaciones =datos}
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this.faseCarga();}
  
    });

      //Rellenamos el select tipo con los datos de la BBDD
      this._tipoService.getTipos().subscribe({

        next:(datos)=>{this.aTipos = datos}
        ,
        error:(error)=>{this._router.navigate(["/error"])}
        ,
        complete:()=>{this.faseCarga();}
    
      });
  

  }



  add():void{

    /* this.poblacion.nombre = this.poblacion.nombre.toUpperCase();
    this.poblacion.activo = 1; */

    //convertimos los valores booleanos de los campos de tipo check
    //nuevamente a número  (true=1)(false=0)
    this.inmueble.ascensor = Number(this.inmueble.ascensor);
    this.inmueble.jardin = Number(this.inmueble.jardin);
    this.inmueble.amueblado = Number(this.inmueble.amueblado);
    this.inmueble.trastero = Number(this.inmueble.trastero);
    this.inmueble.piscina = Number(this.inmueble.piscina);
    this.inmueble.portada = Number(this.inmueble.portada);
    this.inmueble.tendedero = Number(this.inmueble.tendedero);


    
    this._inmuebleService.addInmueble(this.inmueble).subscribe({

      next:(datos)=>{
        console.log(datos)
      }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this._router.navigate(["/list-inmueble"])}

    });

  }

  faseCarga():void{

    this.fasesCargadas++;
    if(this.fasesCargadas == this.nFases){
      this.cargaCompletada = true; //AQUÍ SE TERMINA EL PROCESO DE CARGA...
    }
  }


}
