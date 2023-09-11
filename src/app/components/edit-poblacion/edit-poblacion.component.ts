import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poblacion } from 'src/app/models/entity';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-edit-poblacion',
  templateUrl: './edit-poblacion.component.html',
  styleUrls: ['./edit-poblacion.component.css']
})
export class EditPoblacionComponent implements OnInit{

  ////////////////////////////////////
  nFases:number=2;
  cargaCompletada:boolean=false;
  fasesCargadas:number=0;
  ////////////////////////////////////

  aDatos:any[];
  id:number; 

  poblacion:Poblacion = {

    nombre:'',
    provincia:{
      nombre:'',
      activo:''
    },
    activo:''
  }

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _poblacionService:PoblacionService,
    private _provinciaService:ProvinciaService,
  ){}


  ngOnInit(): void {
    this.getDatos();
  }

  getDatos():void{

    /////////////////////////////////////////////////
    this._route.params.subscribe({

      next:(params)=>{ this.id=params['id']}
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{}

    });

    /////////////////////////////////////////////////

    this._poblacionService.getPoblacion(this.id).subscribe({

      next:(datos)=>{
        
          datos.activo = Boolean(datos.activo);
          this.poblacion=datos;
    
       }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this.faseCarga();}

    });

    /////////////////////////////////////////////////

    this._provinciaService.getProvincias().subscribe({

      next:(datos)=>{
        
          this.aDatos=datos;
    
       }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this.faseCarga();}

    });

  }


  edit():void{

    //convertimos el valor booleano del campo "activo"
    //nuevamente a número
    this.poblacion.activo = Number(this.poblacion.activo);
    

    this._poblacionService.updatePoblacion(this.poblacion).subscribe({

      next:(datos)=>{console.log(datos) }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this._router.navigate(["/list-poblacion"])}

    });
  }



  faseCarga():void{

    this.fasesCargadas++;
    if(this.fasesCargadas == this.nFases){
      this.cargaCompletada = true; //AQUÍ SE TERMINA EL PROCESO DE CARGA...
    }
  }


}
