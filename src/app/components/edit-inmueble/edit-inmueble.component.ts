import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmueble } from 'src/app/models/entity';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-edit-inmueble',
  templateUrl: './edit-inmueble.component.html',
  styleUrls: ['./edit-inmueble.component.css']
})
export class EditInmuebleComponent implements OnInit{
  
  ////////////////////////////////////
  nFases:number=3;
  cargaCompletada:boolean=false;
  fasesCargadas:number=0;
  ////////////////////////////////////

  aPoblaciones:any[];
  aTipos:any[];


  id:number; 

  inmueble:Inmueble={

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
    private _route:ActivatedRoute,
    private _router:Router,
    private _inmuebleService:InmuebleService,
    private _tipoService:TipoService,
    private _poblacionService:PoblacionService
  ){}

  ngOnInit(): void{
    this.getDatos();
  }



  getDatos(): void{
    
    this._route.params.subscribe({

      next:(params) => { this.id=params['id']}
      ,
      error:(error) => { this._router.navigate(["/error"]) }
      ,
      complete:() => {}

    });

    this._inmuebleService.getInmueble(this.id).subscribe({

      next:(datos) => {

        
        //Aquí vamos a convertir todos los datos de tipo 0-1 (psicinas, amueblado...etc)
        //a booleanos para poder rellnar los controles de tipo check en el HTML
        datos.activo = Boolean(datos.activo);
        datos.ascensor = Boolean(datos.ascensor);
        datos.jardin = Boolean(datos.jardin);
        datos.amueblado = Boolean(datos.amueblado);
        datos.trastero = Boolean(datos.trastero);
        datos.piscina = Boolean(datos.piscina);
        datos.portada = Boolean(datos.portada);
        datos.tendedero = Boolean(datos.tendedero);

        
        this.inmueble = datos;
      }
      ,
      error:(error) => {this._router.navigate(["/error"])}
      ,
      complete:() => { this.faseCarga(); }

    }); //end of getInmueble()

    //CARGAMOS LOS DATOS DEL DESPLEGABLE TIPO
    this._tipoService.getTipos().subscribe({

      next:(datos)=>{this.aTipos = datos}
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this.faseCarga();}
  
    });



    //CARGAMOS LOS DATOS DEL DESPLEGABLE POBLACION
    this._poblacionService.getPoblaciones().subscribe({

      next:(datos)=>{this.aPoblaciones =datos}
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{/*this.faseCarga();*/}
  
    });
    /////////////////////////////////////////////////////////////


  } //end of getDatos()

  edit():void{

    //convertimos el valor booleano del campo "activo"
    //nuevamente a número
    this.inmueble.activo = Number(this.inmueble.activo);
    this.inmueble.ascensor = Number(this.inmueble.ascensor);
    this.inmueble.jardin = Number(this.inmueble.jardin);
    this.inmueble.amueblado = Number(this.inmueble.amueblado);
    this.inmueble.trastero = Number(this.inmueble.trastero);
    this.inmueble.piscina = Number(this.inmueble.piscina);
    this.inmueble.portada = Number(this.inmueble.portada);
    this.inmueble.tendedero = Number(this.inmueble.tendedero);

    this._inmuebleService.updateInmueble(this.inmueble).subscribe({

      next:(datos) => {
        
        console.log(datos)
      }
      ,
      error:(error) => {this._router.navigate(["/error"])}
      ,
      complete:() => {this._router.navigate(["/list-inmueble"])}

    })

  } //end of edit()


  faseCarga():void{

    this.fasesCargadas++;
    if(this.fasesCargadas == this.nFases){
      this.cargaCompletada = true; //AQUÍ SE TERMINA EL PROCESO DE CARGA...
    }
  }
}
