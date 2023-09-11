import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from 'src/app/models/entity';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-edit-provincia',
  templateUrl: './edit-provincia.component.html',
  styleUrls: ['./edit-provincia.component.css']
})
export class EditProvinciaComponent implements OnInit{

  id:number; 

  provincia:Provincia={

    nombre:'',
    activo:''
  }

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _provinciaService:ProvinciaService
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

    this._provinciaService.getProvincia(this.id).subscribe({

      next:(datos)=>{
        
          datos.activo = Boolean(datos.activo);
          this.provincia=datos;
    
       }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{}

    });
  }


  edit():void{

    //convertimos el valor booleano del campo "activo"
    //nuevamente a número
    this.provincia.activo = Number(this.provincia.activo);
    

    this._provinciaService.updateProvincia(this.provincia).subscribe({

      next:(datos)=>{console.log(datos) }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{this._router.navigate(["/list-provincia"])}

    });
  }
}
