import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-detail-inmueble',
  templateUrl: './detail-inmueble.component.html',
  styleUrls: ['./detail-inmueble.component.css']
})
export class DetailInmuebleComponent implements OnInit{

  id:number;
  inmueble:any={};

  constructor(
    private _route:ActivatedRoute,
    private _inmuebleService:InmuebleService,
    private _router:Router
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
        
    this._inmuebleService.getInmueble(this.id).subscribe({

      next:(datos)=>{
        this.inmueble = datos;
        console.log(this.inmueble);
      }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{}

    });

  }

}
