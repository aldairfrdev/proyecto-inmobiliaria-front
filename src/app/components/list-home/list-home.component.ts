import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit{

  titular:string="Los más interesantes...";
  aDatos:any[]=[];

  constructor(
    private _inmuebleService:InmuebleService,
    private _router:Router

  ){}


  ngOnInit(): void {
    
    this.getDatos();
  }


  getDatos():void{

    this._inmuebleService.getInmueblesPortada().subscribe({

      next:(datos)=>{ 
        console.log(datos)
        this.aDatos=datos;
      }
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{}

    });


  }

}
